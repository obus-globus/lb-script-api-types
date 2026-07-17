import type { Float2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Float2ShortAVLTreeMap$ValueIterator extends Float2ShortAVLTreeMap$TreeIterator implements ShortListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}