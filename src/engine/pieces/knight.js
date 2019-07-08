import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = this.getRotatedDirections([2, 1], [1, 2]);
        return this.filterMoves(board, directions);
    }
}
