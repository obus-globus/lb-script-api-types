import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_STRONG_SIGN_PARA$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_STRONG_SIGN_PARA$ByReference.d.ts'
import type { WinCrypt$CryptGetSignerCertificateCallback } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CryptGetSignerCertificateCallback.d.ts'
import type { WinCrypt$HCRYPTPROV_LEGACY } from '../../../../../com/sun/jna/platform/win32/WinCrypt$HCRYPTPROV_LEGACY.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCrypt$CRYPT_VERIFY_MESSAGE_PARA extends Structure {
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
    cbSize: number;
    dwMsgAndCertEncodingType: number;
    hCryptProv: WinCrypt$HCRYPTPROV_LEGACY;
    pStrongSignPara: WinCrypt$CERT_STRONG_SIGN_PARA$ByReference;
    pfnGetSignerCertificate: WinCrypt$CryptGetSignerCertificateCallback;
    pvGetArg: Pointer;
    write(): void;
}