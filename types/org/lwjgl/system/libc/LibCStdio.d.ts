import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class LibCStdio extends Object {
    static fprintf: number;
    static fscanf: number;
    static snprintf: number;
    static sscanf: number;
    static stderr: number;
    static stdin: number;
    static stdout: number;
    static feof(paramarg0: number): number;
    static ferror(paramarg0: number): number;
    static fflush(paramarg0: number): number;
    static nfeof(paramarg0: number): number;
    static nferror(paramarg0: number): number;
    static nfflush(paramarg0: number): number;
    static nvsnprintf(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static nvsscanf(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static vsnprintf(paramarg0: ByteBuffer, paramarg1: CharSequence, paramarg2: number): number;
    static vsnprintf(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: number): number;
    static vsscanf(paramarg0: CharSequence, paramarg1: CharSequence, paramarg2: number): number;
    static vsscanf(paramarg0: ByteBuffer, paramarg1: ByteBuffer, paramarg2: number): number;
    constructor()
}