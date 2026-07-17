import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Short2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanRBTreeMap$TreeIterator.d.ts'
export class Short2BooleanRBTreeMap$ValueIterator extends Short2BooleanRBTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}