import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../../../../com/sun/jna/WString.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$DISPIDByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$DISPIDByReference.d.ts'
import type { WinDef$LCID } from '../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DispatchVTable$GetIDsOfNamesCallback extends StdCallLibrary$StdCallCallback, Object{
    invoke(arg0: Pointer, arg1: Guid$REFIID, arg2: WString[], arg3: number, arg4: WinDef$LCID, arg5: OaIdl$DISPIDByReference): WinNT$HRESULT;
}