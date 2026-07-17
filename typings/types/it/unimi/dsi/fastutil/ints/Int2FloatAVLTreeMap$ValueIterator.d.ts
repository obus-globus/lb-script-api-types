import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Int2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatAVLTreeMap$TreeIterator.d.ts'
export class Int2FloatAVLTreeMap$ValueIterator extends Int2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}