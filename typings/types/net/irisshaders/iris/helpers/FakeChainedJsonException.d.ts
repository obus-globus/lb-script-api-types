import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { ShaderCompileException } from '../../../../net/irisshaders/iris/gl/shader/ShaderCompileException.d.ts'
import type { ChainedJsonException } from '../../../../net/minecraft/server/ChainedJsonException.d.ts'
export class FakeChainedJsonException extends ChainedJsonException {
    static forException(parame: Exception): ChainedJsonException;
    constructor(arg0: ShaderCompileException)
    readonly trueException: ShaderCompileException;
    getTrueException(): ShaderCompileException;
}