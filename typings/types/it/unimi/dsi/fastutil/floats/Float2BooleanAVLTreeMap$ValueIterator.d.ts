import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Float2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Float2BooleanAVLTreeMap$ValueIterator extends Float2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}