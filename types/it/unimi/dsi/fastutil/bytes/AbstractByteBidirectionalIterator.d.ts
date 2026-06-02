import type { AbstractByteIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteIterator.d.ts'
import type { ByteBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBidirectionalIterator.d.ts'
export abstract class AbstractByteBidirectionalIterator extends AbstractByteIterator implements ByteBidirectionalIterator {
    constructor()
    back(arg0: number): number;
    previous(): number;
    skip(arg0: number): number;
}