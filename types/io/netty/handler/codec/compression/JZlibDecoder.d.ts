import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { ZlibDecoder } from '../../../../../io/netty/handler/codec/compression/ZlibDecoder.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
export class JZlibDecoder extends ZlibDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: ZlibWrapper)
    constructor(arg0: ZlibWrapper, arg1: number)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
}