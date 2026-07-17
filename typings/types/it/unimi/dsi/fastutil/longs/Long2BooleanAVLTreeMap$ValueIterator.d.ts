import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Long2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Long2BooleanAVLTreeMap$ValueIterator extends Long2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}