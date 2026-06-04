import type { AbstractByteBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteBidirectionalIterator.d.ts'
import type { ByteBigListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBigListIterator.d.ts'
export abstract class AbstractByteBigListIterator extends AbstractByteBidirectionalIterator implements ByteBigListIterator {
    constructor()
    add(arg0: number): void;
    back(arg0: number): number;
    set(arg0: number): void;
    skip(arg0: number): number;
}