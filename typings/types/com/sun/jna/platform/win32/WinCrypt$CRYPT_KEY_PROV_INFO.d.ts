import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CRYPT_KEY_PROV_PARAM } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_KEY_PROV_PARAM.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CRYPT_KEY_PROV_INFO extends Structure {
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
    cProvParam: number;
    dwFlags: number;
    dwKeySpec: number;
    dwProvType: number;
    pwszContainerName: string;
    pwszProvName: string;
    rgProvParam: Pointer;
    getRgProvParam(): WinCrypt$CRYPT_KEY_PROV_PARAM[];
}