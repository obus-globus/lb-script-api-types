import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleRBTreeMap$TreeIterator.d.ts'
export class Object2DoubleRBTreeMap$ValueIterator extends Object2DoubleRBTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}