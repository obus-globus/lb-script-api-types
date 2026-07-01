import type { Byte2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortAVLTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortAVLTreeMap$ValueIterator extends Byte2ShortAVLTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}