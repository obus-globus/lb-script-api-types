import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Short2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteAVLTreeMap$TreeIterator.d.ts'
export class Short2ByteAVLTreeMap$ValueIterator extends Short2ByteAVLTreeMap$TreeIterator implements ByteListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextByte(): number;
    previous(): number;
    previousByte(): number;
    remove(): void;
    set(arg0: number): void;
}