import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CTL_INFO$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CTL_INFO$ByReference.d.ts'
import type { WinCrypt$HCERTSTORE } from '../../../../../com/sun/jna/platform/win32/WinCrypt$HCERTSTORE.d.ts'
import type { WinCrypt$HCRYPTMSG } from '../../../../../com/sun/jna/platform/win32/WinCrypt$HCRYPTMSG.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CTL_CONTEXT extends Structure {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    cbCtlContent: number;
    cbCtlEncoded: number;
    dwMsgAndCertEncodingType: number;
    hCertStore: WinCrypt$HCERTSTORE;
    hCryptMsg: WinCrypt$HCRYPTMSG;
    pCtlInfo: WinCrypt$CTL_INFO$ByReference;
    pbCtlContent: Pointer;
    pbCtlEncoded: Pointer;
}