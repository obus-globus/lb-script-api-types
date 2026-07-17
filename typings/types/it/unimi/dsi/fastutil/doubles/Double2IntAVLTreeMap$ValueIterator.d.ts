import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntAVLTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Double2IntAVLTreeMap$ValueIterator extends Double2IntAVLTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}