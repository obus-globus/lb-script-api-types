import type { Char2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2FloatAVLTreeMap$KeyIterator extends Char2FloatAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}