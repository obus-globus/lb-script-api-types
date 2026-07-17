import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Char2FloatAVLTreeMap$ValueIterator extends Char2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}