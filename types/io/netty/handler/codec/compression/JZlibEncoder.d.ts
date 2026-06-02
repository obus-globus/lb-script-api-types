import type { ZlibEncoder } from '../../../../../io/netty/handler/codec/compression/ZlibEncoder.d.ts'
import type { ZlibWrapper } from '../../../../../io/netty/handler/codec/compression/ZlibWrapper.d.ts'
export class JZlibEncoder extends ZlibEncoder {
    constructor()
    constructor(arg0: ZlibWrapper)
    constructor(arg0: ZlibWrapper, arg1: number)
    constructor(arg0: ZlibWrapper, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number, arg2: number, arg3: number[])
}