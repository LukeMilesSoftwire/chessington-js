import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = this.getRotatedDirections([0, 1], [1, 1]);
        return this.filterMoves(board, directions);
    }

    canBeTakenBy(piece) {
        return false;
    }
}
