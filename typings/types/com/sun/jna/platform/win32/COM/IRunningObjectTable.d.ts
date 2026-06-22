import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { WinBase$FILETIME } from '../../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinBase$FILETIME$ByReference } from '../../../../../../com/sun/jna/platform/win32/WinBase$FILETIME$ByReference.d.ts'
import type { WinDef$DWORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IRunningObjectTable extends IUnknown, Object{
    AddRef(): number;
    EnumRunning(arg0: PointerByReference): WinNT$HRESULT;
    GetObject(arg0: Pointer, arg1: PointerByReference): WinNT$HRESULT;
    GetTimeOfLastChange(arg0: Pointer, arg1: WinBase$FILETIME$ByReference): WinNT$HRESULT;
    IsRunning(arg0: Pointer): WinNT$HRESULT;
    NoteChangeTime(arg0: WinDef$DWORD, arg1: WinBase$FILETIME): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Register(arg0: WinDef$DWORD, arg1: Pointer, arg2: Pointer, arg3: WinDef$DWORDByReference): WinNT$HRESULT;
    Release(): number;
    Revoke(arg0: WinDef$DWORD): WinNT$HRESULT;
}