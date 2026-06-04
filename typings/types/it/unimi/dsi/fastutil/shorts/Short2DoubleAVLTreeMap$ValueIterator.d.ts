import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Short2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleAVLTreeMap$TreeIterator.d.ts'
export class Short2DoubleAVLTreeMap$ValueIterator extends Short2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: Short2DoubleAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}