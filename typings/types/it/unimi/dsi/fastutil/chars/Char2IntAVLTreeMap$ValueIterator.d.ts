import type { Char2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntAVLTreeMap$ValueIterator extends Char2IntAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}