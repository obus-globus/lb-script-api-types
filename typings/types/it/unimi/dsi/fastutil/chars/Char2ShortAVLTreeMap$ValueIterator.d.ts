import type { Char2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortAVLTreeMap$ValueIterator extends Char2ShortAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}