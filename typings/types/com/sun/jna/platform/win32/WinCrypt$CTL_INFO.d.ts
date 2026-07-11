import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$FILETIME } from '../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinCrypt$CERT_EXTENSION } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_EXTENSION.d.ts'
import type { WinCrypt$CRYPT_ALGORITHM_IDENTIFIER } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_ALGORITHM_IDENTIFIER.d.ts'
import type { WinCrypt$CTL_ENTRY } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_ENTRY.d.ts'
import type { WinCrypt$CTL_USAGE } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_USAGE.d.ts'
import type { WinCrypt$DATA_BLOB } from '../../../../../com/sun/jna/platform/win32/WinCrypt$DATA_BLOB.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CTL_INFO extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    ListIdentifier: WinCrypt$DATA_BLOB;
    NextUpdate: WinBase$FILETIME;
    SequenceNumber: WinCrypt$DATA_BLOB;
    SubjectAlgorithm: WinCrypt$CRYPT_ALGORITHM_IDENTIFIER;
    SubjectUsage: WinCrypt$CTL_USAGE;
    ThisUpdate: WinBase$FILETIME;
    cCTLEntry: number;
    cExtension: number;
    dwVersion: number;
    rgCTLEntry: Pointer;
    rgExtension: Pointer;
    getRgCTLEntry(): WinCrypt$CTL_ENTRY[];
    getRgExtension(): WinCrypt$CERT_EXTENSION[];
}