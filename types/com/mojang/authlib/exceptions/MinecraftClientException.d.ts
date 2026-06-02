import type { AuthenticationException } from '../../../../com/mojang/authlib/exceptions/AuthenticationException.d.ts'
import type { MinecraftClientException$ErrorType } from '../../../../com/mojang/authlib/exceptions/MinecraftClientException$ErrorType.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class MinecraftClientException extends RuntimeException {
    constructor(arg0: MinecraftClientException$ErrorType, arg1: string)
    constructor(arg0: MinecraftClientException$ErrorType, arg1: string, arg2: Throwable)
    readonly type: MinecraftClientException$ErrorType;
    getType(): MinecraftClientException$ErrorType;
    toAuthenticationException(): AuthenticationException;
}