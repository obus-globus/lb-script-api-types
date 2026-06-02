import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class ShaderCompileException extends RuntimeException {
    constructor(arg0: string, arg1: Exception)
    constructor(arg0: string, arg1: string)
    readonly error: string;
    readonly filename: string;
    readonly message: string | null;
    getError(): string;
    getFilename(): string;
}