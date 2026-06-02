import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IRunningObjectTable } from '../../../../../../com/sun/jna/platform/win32/COM/IRunningObjectTable.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WinBase$FILETIME } from '../../../../../../com/sun/jna/platform/win32/WinBase$FILETIME.d.ts'
import type { WinBase$FILETIME$ByReference } from '../../../../../../com/sun/jna/platform/win32/WinBase$FILETIME$ByReference.d.ts'
import type { WinDef$DWORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class RunningObjectTable extends Unknown implements IRunningObjectTable {
    static IID: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    EnumRunning(arg0: PointerByReference): WinNT$HRESULT;
    GetObject(arg0: Pointer, arg1: PointerByReference): WinNT$HRESULT;
    GetTimeOfLastChange(arg0: Pointer, arg1: WinBase$FILETIME$ByReference): WinNT$HRESULT;
    IsRunning(arg0: Pointer): WinNT$HRESULT;
    NoteChangeTime(arg0: WinDef$DWORD, arg1: WinBase$FILETIME): WinNT$HRESULT;
    Register(arg0: WinDef$DWORD, arg1: Pointer, arg2: Pointer, arg3: WinDef$DWORDByReference): WinNT$HRESULT;
    Revoke(arg0: WinDef$DWORD): WinNT$HRESULT;
}