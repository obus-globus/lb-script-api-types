import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Short2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntAVLTreeMap$TreeIterator.d.ts'
export class Short2IntAVLTreeMap$ValueIterator extends Short2IntAVLTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}