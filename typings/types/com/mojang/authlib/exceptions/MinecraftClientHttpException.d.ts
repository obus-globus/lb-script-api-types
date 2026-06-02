import type { AuthenticationException } from '../../../../com/mojang/authlib/exceptions/AuthenticationException.d.ts'
import type { MinecraftClientException } from '../../../../com/mojang/authlib/exceptions/MinecraftClientException.d.ts'
import type { ErrorResponse } from '../../../../com/mojang/authlib/yggdrasil/response/ErrorResponse.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
export class MinecraftClientHttpException extends MinecraftClientException {
    static FORBIDDEN: number;
    static UNAUTHORIZED: number;
    constructor(arg0: number)
    constructor(arg0: number, arg1: ErrorResponse)
    readonly response: ErrorResponse;
    readonly status: number;
    // private getError(): Optional<string>;
    getResponse(): Optional<ErrorResponse>;
    getStatus(): number;
    // private hasError(arg0: string): boolean;
    toAuthenticationException(): AuthenticationException;
    toString(): string;
}