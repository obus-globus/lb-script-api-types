import type { AbstractByteBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByteBidirectionalIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
export abstract class AbstractByteListIterator extends AbstractByteBidirectionalIterator implements ByteListIterator {
    constructor()
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    previous(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}