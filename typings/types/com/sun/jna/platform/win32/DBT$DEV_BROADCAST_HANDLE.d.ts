import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { WinUser$HDEVNOTIFY } from '../../../../../com/sun/jna/platform/win32/WinUser$HDEVNOTIFY.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class DBT$DEV_BROADCAST_HANDLE extends Structure {
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
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    dbch_data: number[];
    dbch_devicetype: number;
    dbch_eventguid: Guid$GUID;
    dbch_handle: WinNT$HANDLE;
    dbch_hdevnotify: WinUser$HDEVNOTIFY;
    dbch_nameoffset: WinDef$LONG;
    dbch_reserved: number;
    dbch_size: number;
}