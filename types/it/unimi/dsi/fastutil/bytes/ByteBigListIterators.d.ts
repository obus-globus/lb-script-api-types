import type { ByteBigListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBigListIterator.d.ts'
import type { ByteBigListIterators$EmptyBigListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBigListIterators$EmptyBigListIterator.d.ts'
import type { ByteListIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBigListIterators extends Object {
    static EMPTY_BIG_LIST_ITERATOR: ByteBigListIterators$EmptyBigListIterator;
    static asBigListIterator(paramarg0: ByteListIterator): ByteBigListIterator;
    static singleton(paramarg0: number): ByteBigListIterator;
    static unmodifiable(paramarg0: ByteBigListIterator): ByteBigListIterator;
    private constructor()
}