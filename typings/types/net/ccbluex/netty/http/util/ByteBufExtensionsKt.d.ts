import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufInputStream } from '../../../../../io/netty/buffer/ByteBufInputStream.d.ts'
import type { ByteBufOutputStream } from '../../../../../io/netty/buffer/ByteBufOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteBufExtensionsKt extends Object {
    static inputStream(self: ByteBuf): ByteBufInputStream;
    static outputStream(self: ByteBuf): ByteBufOutputStream;
}