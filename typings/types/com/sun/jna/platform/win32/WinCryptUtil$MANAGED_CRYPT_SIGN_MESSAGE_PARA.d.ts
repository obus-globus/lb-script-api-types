import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinCrypt$CERT_CONTEXT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT.d.ts'
import type { WinCrypt$CRL_CONTEXT } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRL_CONTEXT.d.ts'
import type { WinCrypt$CRYPT_ATTRIBUTE } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_ATTRIBUTE.d.ts'
import type { WinCrypt$CRYPT_SIGN_MESSAGE_PARA } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CRYPT_SIGN_MESSAGE_PARA.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinCryptUtil$MANAGED_CRYPT_SIGN_MESSAGE_PARA extends WinCrypt$CRYPT_SIGN_MESSAGE_PARA {
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
    // private rgAuthAttrs: WinCrypt$CRYPT_ATTRIBUTE[];
    // private rgUnauthAttrs: WinCrypt$CRYPT_ATTRIBUTE[];
    // private rgpMsgCerts: WinCrypt$CERT_CONTEXT[];
    // private rgpMsgCrls: WinCrypt$CRL_CONTEXT[];
    getRgAuthAttr(): WinCrypt$CRYPT_ATTRIBUTE[];
    getRgUnauthAttr(): WinCrypt$CRYPT_ATTRIBUTE[];
    getRgpMsgCert(): WinCrypt$CERT_CONTEXT[];
    getRgpMsgCrl(): WinCrypt$CRL_CONTEXT[];
    read(): void;
    setRgAuthAttr(arg0: WinCrypt$CRYPT_ATTRIBUTE[]): void;
    setRgUnauthAttr(arg0: WinCrypt$CRYPT_ATTRIBUTE[]): void;
    setRgpMsgCert(arg0: WinCrypt$CERT_CONTEXT[]): void;
    setRgpMsgCrl(arg0: WinCrypt$CRL_CONTEXT[]): void;
    write(): void;
}