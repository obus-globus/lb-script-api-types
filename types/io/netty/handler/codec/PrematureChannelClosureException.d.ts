import type { CodecException } from '../../../../io/netty/handler/codec/CodecException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PrematureChannelClosureException extends CodecException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}