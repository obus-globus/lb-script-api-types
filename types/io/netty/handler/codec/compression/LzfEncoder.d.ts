import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export class LzfEncoder extends MessageToByteEncoder<ByteBuf> {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    constructor(arg0: boolean, arg1: number, arg2: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: number)
}