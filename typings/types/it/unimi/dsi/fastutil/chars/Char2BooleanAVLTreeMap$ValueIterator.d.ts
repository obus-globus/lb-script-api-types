import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Char2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanAVLTreeMap$ValueIterator extends Char2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}