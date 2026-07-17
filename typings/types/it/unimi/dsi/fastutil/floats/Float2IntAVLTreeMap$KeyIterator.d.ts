import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2IntAVLTreeMap$KeyIterator extends Float2IntAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}