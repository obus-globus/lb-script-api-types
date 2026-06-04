import type { Double2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Double2ShortAVLTreeMap$ValueIterator extends Double2ShortAVLTreeMap$TreeIterator implements ShortListIterator {
    private constructor(null_: Double2ShortAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}