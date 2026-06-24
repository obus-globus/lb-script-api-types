import type { Int2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Int2FloatAVLTreeMap$KeyIterator extends Int2FloatAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}