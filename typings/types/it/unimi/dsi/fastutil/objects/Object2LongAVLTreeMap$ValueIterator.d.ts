import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongAVLTreeMap$TreeIterator.d.ts'
export class Object2LongAVLTreeMap$ValueIterator extends Object2LongAVLTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}