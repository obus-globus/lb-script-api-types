import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Base64Dialect } from '../../../../../io/netty/handler/codec/base64/Base64Dialect.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Base64 extends Object {
    static decode(paramarg0: ByteBuf): ByteBuf;
    static decode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): ByteBuf;
    static decode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: Base64Dialect): ByteBuf;
    static decode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: Base64Dialect, paramarg4: ByteBufAllocator): ByteBuf;
    static decode(paramarg0: ByteBuf, paramarg1: Base64Dialect): ByteBuf;
    static encode(paramarg0: ByteBuf): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: boolean): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: boolean, paramarg2: boolean): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: boolean, paramarg2: Base64Dialect): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: boolean, paramarg2: Base64Dialect, paramarg3: boolean): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: boolean): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: Base64Dialect): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: Base64Dialect, paramarg5: boolean): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: boolean, paramarg4: Base64Dialect, paramarg5: ByteBufAllocator): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: number, paramarg2: number, paramarg3: Base64Dialect): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: Base64Dialect): ByteBuf;
    static encode(paramarg0: ByteBuf, paramarg1: Base64Dialect, paramarg2: boolean): ByteBuf;
    private constructor()
}