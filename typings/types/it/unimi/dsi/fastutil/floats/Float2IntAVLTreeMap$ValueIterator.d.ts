import type { Float2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Float2IntAVLTreeMap$ValueIterator extends Float2IntAVLTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: Float2IntAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}