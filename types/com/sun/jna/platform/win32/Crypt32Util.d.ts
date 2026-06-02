import type { WinCrypt$CRYPTPROTECT_PROMPTSTRUCT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPTPROTECT_PROMPTSTRUCT.d.ts'
import type { WinCrypt$DATA_BLOB } from '../../../../../com/sun/jna/platform/win32/WinCrypt$DATA_BLOB.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Crypt32Util extends Object {
    static CertNameToStr(paramarg0: number, paramarg1: number, paramarg2: WinCrypt$DATA_BLOB): string;
    static cryptProtectData(paramarg0: number[]): number[];
    static cryptProtectData(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: string, paramarg4: WinCrypt$CRYPTPROTECT_PROMPTSTRUCT): number[];
    static cryptProtectData(paramarg0: number[], paramarg1: number): number[];
    static cryptUnprotectData(paramarg0: number[]): number[];
    static cryptUnprotectData(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: WinCrypt$CRYPTPROTECT_PROMPTSTRUCT): number[];
    static cryptUnprotectData(paramarg0: number[], paramarg1: number): number[];
    constructor()
}