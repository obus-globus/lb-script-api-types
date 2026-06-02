import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class BytecodeEncodingException extends RuntimeException {
    static create(paramreason: string): BytecodeEncodingException;
    private constructor(reason: string)
}