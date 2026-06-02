import type { CodecException } from '../../../../io/netty/handler/codec/CodecException.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class UnsupportedMessageTypeException extends CodecException {
    constructor()
    constructor(arg0: Object, arg1: Class<Object>[])
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}