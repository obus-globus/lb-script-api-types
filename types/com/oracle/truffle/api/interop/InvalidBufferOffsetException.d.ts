import type { InteropException } from '../../../../../com/oracle/truffle/api/interop/InteropException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class InvalidBufferOffsetException extends InteropException {
    static create(parambyteOffset: number, paramlength: number): InvalidBufferOffsetException;
    static create(parambyteOffset: number, paramlength: number, paramcause: Throwable): InvalidBufferOffsetException;
    private constructor(byteOffset: number, length: number)
    private constructor(byteOffset: number, length: number, cause: Throwable)
    readonly byteOffset: number;
    readonly length: number;
    readonly message: string | null;
    getByteOffset(): number;
    getLength(): number;
}