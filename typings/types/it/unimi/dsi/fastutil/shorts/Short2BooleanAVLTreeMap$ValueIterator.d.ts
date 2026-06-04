import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Short2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Short2BooleanAVLTreeMap$ValueIterator extends Short2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: Short2BooleanAVLTreeMap$ValueIterator)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}