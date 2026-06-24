import type { W32FileMonitor } from '../../../../../com/sun/jna/platform/win32/W32FileMonitor.d.ts'
import type { WinBase$OVERLAPPED } from '../../../../../com/sun/jna/platform/win32/WinBase$OVERLAPPED.d.ts'
import type { WinNT$FILE_NOTIFY_INFORMATION } from '../../../../../com/sun/jna/platform/win32/WinNT$FILE_NOTIFY_INFORMATION.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { IntByReference } from '../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class W32FileMonitor$FileInfo extends Object {
    constructor(null_: W32FileMonitor, arg1: File, arg2: WinNT$HANDLE, arg3: number, arg4: boolean)
    file: File;
    handle: WinNT$HANDLE;
    info: WinNT$FILE_NOTIFY_INFORMATION;
    infoLength: IntByReference;
    notifyMask: number;
    overlapped: WinBase$OVERLAPPED;
    recursive: boolean;
}