import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Long2ShortRBTreeMap$ValueIterator extends Long2ShortRBTreeMap$TreeIterator implements ShortListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}