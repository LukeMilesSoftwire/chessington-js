import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = this.getRotatedDirections([1, 1]);
        return this.getMovesInDirections(board, directions);
    }
}
