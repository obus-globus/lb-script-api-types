import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Byte2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Byte2BooleanAVLTreeMap$ValueIterator extends Byte2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}