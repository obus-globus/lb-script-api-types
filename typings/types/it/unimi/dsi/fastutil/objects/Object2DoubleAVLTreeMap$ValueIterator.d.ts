import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleAVLTreeMap$TreeIterator.d.ts'
export class Object2DoubleAVLTreeMap$ValueIterator extends Object2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: Object2DoubleAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}