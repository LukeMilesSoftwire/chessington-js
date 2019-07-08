import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const { row: startRow, col: startCol } = board.findPiece(this);
        const nextSquare = Square.at((this.player === Player.WHITE) ? startRow + 1 : startRow - 1, startCol);
        if (board.isOnBoard(nextSquare) && !board.getPiece(nextSquare)) {
            return [nextSquare];
        }
        else {
            return [];
        }
    }
}
