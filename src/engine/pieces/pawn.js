import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
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
                if (piece && piece.canBeTakenBy(this)) {
                    availableMoves.push(square);
                }
            } 
        }
        
        return availableMoves;
    }
}
