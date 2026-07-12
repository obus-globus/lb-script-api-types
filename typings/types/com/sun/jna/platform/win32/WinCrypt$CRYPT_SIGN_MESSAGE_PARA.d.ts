import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_CONTEXT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT.d.ts'
import type { WinCrypt$CERT_CONTEXT$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT$ByReference.d.ts'
import type { WinCrypt$CRL_CONTEXT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRL_CONTEXT.d.ts'
import type { WinCrypt$CRYPT_ALGORITHM_IDENTIFIER } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_ALGORITHM_IDENTIFIER.d.ts'
import type { WinCrypt$CRYPT_ATTRIBUTE } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_ATTRIBUTE.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinCrypt$CRYPT_SIGN_MESSAGE_PARA extends Structure {
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
    HashAlgorithm: WinCrypt$CRYPT_ALGORITHM_IDENTIFIER;
    HashEncryptionAlgorithm: WinCrypt$CRYPT_ALGORITHM_IDENTIFIER;
    cAuthAttr: number;
    cMsgCert: number;
    cMsgCrl: number;
    cUnauthAttr: number;
    cbSize: number;
    dwFlags: number;
    dwInnerContentType: number;
    dwMsgEncodingType: number;
    pSigningCert: WinCrypt$CERT_CONTEXT$ByReference;
    pvHashAuxInfo: Pointer;
    pvHashEncryptionAuxInfo: Pointer;
    rgAuthAttr: Pointer;
    rgUnauthAttr: Pointer;
    rgpMsgCert: Pointer;
    rgpMsgCrl: Pointer;
    getRgAuthAttr(): WinCrypt$CRYPT_ATTRIBUTE[];
    getRgUnauthAttr(): WinCrypt$CRYPT_ATTRIBUTE[];
    getRgpMsgCert(): WinCrypt$CERT_CONTEXT[];
    getRgpMsgCrl(): WinCrypt$CRL_CONTEXT[];
}