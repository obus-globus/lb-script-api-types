import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinDef } from '../../../../../com/sun/jna/platform/win32/WinDef.d.ts'
import type { WinDef$BOOL } from '../../../../../com/sun/jna/platform/win32/WinDef$BOOL.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinUser$HPOWERNOTIFY } from '../../../../../com/sun/jna/platform/win32/WinUser$HPOWERNOTIFY.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser extends WinDef, Object{
    RegisterPowerSettingNotification(arg0: WinNT$HANDLE, arg1: Guid$GUID, arg2: number): WinUser$HPOWERNOTIFY;
    UnregisterPowerSettingNotification(arg0: WinUser$HPOWERNOTIFY): WinDef$BOOL;
}