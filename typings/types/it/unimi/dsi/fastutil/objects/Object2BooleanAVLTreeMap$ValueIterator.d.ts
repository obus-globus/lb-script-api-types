import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Object2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Object2BooleanAVLTreeMap$ValueIterator extends Object2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}