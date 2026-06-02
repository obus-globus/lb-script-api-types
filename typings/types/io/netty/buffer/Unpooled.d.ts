import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ByteOrder } from '../../../java/nio/ByteOrder.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class Unpooled extends Object {
    static BIG_ENDIAN: ByteOrder;
    static EMPTY_BUFFER: ByteBuf;
    static LITTLE_ENDIAN: ByteOrder;
    static buffer(): ByteBuf;
    static buffer(paramarg0: number): ByteBuf;
    static buffer(paramarg0: number, paramarg1: number): ByteBuf;
    static compositeBuffer(): ByteBuf[];
    static compositeBuffer(paramarg0: number): ByteBuf[];
    static copiedBuffer(paramarg0: number[]): ByteBuf;
    static copiedBuffer(paramarg0: number[], paramarg1: number, paramarg2: number): ByteBuf;
    static copiedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static copiedBuffer(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: Charset): ByteBuf;
    static copiedBuffer(paramarg0: string[], paramarg1: Charset): ByteBuf;
    static copiedBuffer(paramarg0: ByteBuf): ByteBuf;
    static copiedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static copiedBuffer(paramarg0: CharSequence, paramarg1: number, paramarg2: number, paramarg3: Charset): ByteBuf;
    static copiedBuffer(paramarg0: CharSequence, paramarg1: Charset): ByteBuf;
    static copiedBuffer(paramarg0: ByteBuffer): ByteBuf;
    static copiedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static copyBoolean(paramarg0: boolean): ByteBuf;
    static copyBoolean(paramarg0: (Object | null)[]): ByteBuf;
    static copyDouble(paramarg0: number): ByteBuf;
    static copyDouble(paramarg0: number[]): ByteBuf;
    static copyFloat(paramarg0: number): ByteBuf;
    static copyFloat(paramarg0: number[]): ByteBuf;
    static copyInt(paramarg0: number): ByteBuf;
    static copyInt(paramarg0: number[]): ByteBuf;
    static copyLong(paramarg0: number): ByteBuf;
    static copyLong(paramarg0: number[]): ByteBuf;
    static copyMedium(paramarg0: number): ByteBuf;
    static copyMedium(paramarg0: number[]): ByteBuf;
    static copyShort(paramarg0: number): ByteBuf;
    static copyShort(paramarg0: number[]): ByteBuf;
    static copyShort(paramarg0: number[]): ByteBuf;
    static directBuffer(): ByteBuf;
    static directBuffer(paramarg0: number): ByteBuf;
    static directBuffer(paramarg0: number, paramarg1: number): ByteBuf;
    static unmodifiableBuffer(paramarg0: ByteBuf): ByteBuf;
    static unmodifiableBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static unreleasableBuffer(paramarg0: ByteBuf): ByteBuf;
    static wrappedBuffer(paramarg0: number[]): ByteBuf;
    static wrappedBuffer(paramarg0: number[], paramarg1: number, paramarg2: number): ByteBuf;
    static wrappedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: number, paramarg1: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: number, paramarg1: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: number, paramarg1: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: ByteBuf): ByteBuf;
    static wrappedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: ByteBuffer): ByteBuf;
    static wrappedBuffer(paramarg0: (Object | null)[]): ByteBuf;
    static wrappedBuffer(paramarg0: number, paramarg1: number, paramarg2: boolean): ByteBuf;
    static wrappedUnmodifiableBuffer(paramarg0: (Object | null)[]): ByteBuf;
    private constructor()
}