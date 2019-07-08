import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const { row: startRow, col: startCol } = board.findPiece(this);
        
        const directions = [[2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2]];
        const moves = directions.map(([dx, dy]) => Square.at(startRow + dx, startCol + dy));
        const availableMoves = moves.filter(board.isOnBoard(square) && !board.getPiece(square));
        return availableMoves;
    }
}
