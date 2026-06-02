import type { IntIterator } from '../../../../it/unimi/dsi/fastutil/ints/IntIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BufferFlipper extends Object {
    constructor()
    readonly flippedBuffers: (Object | null)[];
    flip(arg0: number): void;
    getFlippedBuffers(): IntIterator;
    isFlipped(arg0: number): boolean;
    snapshot(): number[];
}