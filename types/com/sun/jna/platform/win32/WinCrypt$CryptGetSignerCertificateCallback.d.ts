import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinCrypt$CERT_CONTEXT$ByReference } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_CONTEXT$ByReference.d.ts'
import type { WinCrypt$CERT_INFO } from '../../../../../com/sun/jna/platform/win32/WinCrypt$CERT_INFO.d.ts'
import type { WinCrypt$HCERTSTORE } from '../../../../../com/sun/jna/platform/win32/WinCrypt$HCERTSTORE.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinCrypt$CryptGetSignerCertificateCallback extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: Pointer, arg1: number, arg2: WinCrypt$CERT_INFO, arg3: WinCrypt$HCERTSTORE): WinCrypt$CERT_CONTEXT$ByReference;
}