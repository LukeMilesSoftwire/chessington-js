import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    moveTo(board, newSquare) {
        const { col: startCol } = board.findPiece(this);
        if ( newSquare.col !== startCol && !board.getPiece(newSquare)) {
            board.setPiece(board.lastMove.to, undefined);
        }

        super.moveTo(board, newSquare);
    }

    getAvailableMoves(board) {
        const { row: startRow, col: startCol } = board.findPiece(this);
    
        const availableMoves = [];

        const nextSquare = Square.at(startRow + Player.direction(this.player), startCol);
        if (board.isOnBoard(nextSquare) && !board.getPiece(nextSquare)) {
            availableMoves.push(nextSquare);

            if (!this.hasMoved) {
                const secondSquare = Square.at(startRow + 2 * Player.direction(this.player), startCol);
                if (board.isOnBoard(secondSquare) && !board.getPiece(secondSquare)) {
                    availableMoves.push(secondSquare);
                }
            }
        }

        for (const dx of [-1, 1]) {
            const square = Square.at(startRow + Player.direction(this.player), startCol + dx);
            if (board.isOnBoard(nextSquare)) {
                const piece = board.getPiece(square);
                if (piece && piece.canBeTakenBy(this) ||
                    board.lastMove &&
                    board.lastMove.piece instanceof Pawn &&
                    board.lastMove.from.equals(Square.at(startRow + 2 * Player.direction(this.player), startCol + dx)) &&
                    board.lastMove.to.equals(Square.at(startRow, startCol + dx))) {
                    availableMoves.push(square);
                }
            } 
        }
        
        return availableMoves;
    }
}
