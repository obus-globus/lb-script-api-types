import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Short2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharRBTreeMap$ValueIterator extends Short2CharRBTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}