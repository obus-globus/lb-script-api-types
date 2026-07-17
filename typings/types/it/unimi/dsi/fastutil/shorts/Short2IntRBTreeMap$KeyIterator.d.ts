import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
export class Short2IntRBTreeMap$KeyIterator extends Short2IntRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}