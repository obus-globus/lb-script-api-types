import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Object2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatAVLTreeMap$ValueIterator extends Object2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}