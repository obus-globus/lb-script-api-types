import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Object2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanRBTreeMap$TreeIterator.d.ts'
export class Object2BooleanRBTreeMap$ValueIterator extends Object2BooleanRBTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}