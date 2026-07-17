import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Long2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharAVLTreeMap$TreeIterator.d.ts'
export class Long2CharAVLTreeMap$ValueIterator extends Long2CharAVLTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}