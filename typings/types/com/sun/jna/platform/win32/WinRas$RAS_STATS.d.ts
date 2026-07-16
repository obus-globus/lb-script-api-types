import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinRas$RAS_STATS extends Structure {
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
    constructor()
    constructor(arg0: Pointer)
    dwAlignmentErr: number;
    dwBps: number;
    dwBufferOverrunErr: number;
    dwBytesRcved: number;
    dwBytesXmited: number;
    dwCompressionRatioIn: number;
    dwCompressionRatioOut: number;
    dwConnectDuration: number;
    dwCrcErr: number;
    dwFramesRcved: number;
    dwFramesXmited: number;
    dwFramingErr: number;
    dwHardwareOverrunErr: number;
    dwSize: number;
    dwTimeoutErr: number;
}