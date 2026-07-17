import type { Float2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Float2ShortRBTreeMap$ValueIterator extends Float2ShortRBTreeMap$TreeIterator implements ShortListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}