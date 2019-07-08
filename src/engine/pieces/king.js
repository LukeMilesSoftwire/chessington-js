import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const { row: startRow, col: startCol } = board.findPiece(this);
        
        const directions = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
        const moves = directions.map(([dx, dy]) => Square.at(startRow + dx, startCol + dy));
        const availableMoves = moves.filter(square => board.isMovable(square));
        return availableMoves;
    }
}
