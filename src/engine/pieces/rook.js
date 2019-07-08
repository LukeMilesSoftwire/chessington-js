import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

        return this.getMovesInDirections(board, directions);
    }
}
