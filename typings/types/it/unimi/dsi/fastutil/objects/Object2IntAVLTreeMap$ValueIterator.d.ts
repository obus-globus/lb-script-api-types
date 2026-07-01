import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntAVLTreeMap$ValueIterator extends Object2IntAVLTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}