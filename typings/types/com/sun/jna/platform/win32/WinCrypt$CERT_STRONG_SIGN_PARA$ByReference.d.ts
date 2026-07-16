import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Structure$ByReference } from '../../../../../com/sun/jna/Structure$ByReference.d.ts'
import type { WinCrypt$CERT_CHAIN_PARA } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CHAIN_PARA.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CERT_STRONG_SIGN_PARA$ByReference extends WinCrypt$CERT_CHAIN_PARA implements Structure$ByReference {
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
}