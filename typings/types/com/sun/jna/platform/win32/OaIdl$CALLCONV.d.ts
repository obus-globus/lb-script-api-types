import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class OaIdl$CALLCONV extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static CC_CDECL: number;
    static CC_FASTCALL: number;
    static CC_FPFASTCALL: number;
    static CC_MACPASCAL: number;
    static CC_MAX: number;
    static CC_MPWCDECL: number;
    static CC_MPWPASCAL: number;
    static CC_MSCPASCAL: number;
    static CC_PASCAL: number;
    static CC_STDCALL: number;
    static CC_SYSCALL: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: number)
    value: number;
}