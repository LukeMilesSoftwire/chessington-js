import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = this.getRotatedDirections([0, 1], [1, 1]);
        return this.getMovesInDirections(board, directions);
    }
}
