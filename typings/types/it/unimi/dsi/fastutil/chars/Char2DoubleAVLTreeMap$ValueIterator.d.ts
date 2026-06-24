import type { Char2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2DoubleAVLTreeMap$ValueIterator extends Char2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}