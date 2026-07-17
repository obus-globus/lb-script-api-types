import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntRBTreeMap$TreeIterator.d.ts'
export class Object2IntRBTreeMap$ValueIterator extends Object2IntRBTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}