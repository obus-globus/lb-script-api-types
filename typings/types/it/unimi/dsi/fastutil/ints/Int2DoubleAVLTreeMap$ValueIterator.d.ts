import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Int2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleAVLTreeMap$TreeIterator.d.ts'
export class Int2DoubleAVLTreeMap$ValueIterator extends Int2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}