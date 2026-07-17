import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2CharAVLTreeMap$KeyIterator extends Char2CharAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}