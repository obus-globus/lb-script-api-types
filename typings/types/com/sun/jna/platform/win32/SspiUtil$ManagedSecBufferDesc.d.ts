import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Sspi$SecBuffer } from '../../../../../com/sun/jna/platform/win32/Sspi$SecBuffer.d.ts'
import type { Sspi$SecBufferDesc } from '../../../../../com/sun/jna/platform/win32/Sspi$SecBufferDesc.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class SspiUtil$ManagedSecBufferDesc extends Sspi$SecBufferDesc {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number)
    // private secBuffers: Sspi$SecBuffer[];
    getBuffer(arg0: number): Sspi$SecBuffer;
    read(): void;
    write(): void;
}