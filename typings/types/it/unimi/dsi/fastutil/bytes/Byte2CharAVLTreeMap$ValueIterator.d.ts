import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Byte2CharAVLTreeMap$ValueIterator extends Byte2CharAVLTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}