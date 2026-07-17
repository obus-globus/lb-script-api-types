import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Short2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatAVLTreeMap$TreeIterator.d.ts'
export class Short2FloatAVLTreeMap$ValueIterator extends Short2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}