import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Guid$GUID } from '../../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Variant$VARIANT } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
export class Wbemcli$IWbemContext extends Unknown {
    static CLSID_WbemContext: Guid$CLSID;
    static IID_IUNKNOWN: Guid$IID;
    static IID_IWbemContext: Guid$GUID;
    static create(): Wbemcli$IWbemContext;
    constructor()
    constructor(arg0: Pointer)
    SetValue(arg0: string, arg1: number, arg2: Variant$VARIANT): void;
    SetValue(arg0: string, arg1: number, arg2: boolean): void;
    SetValue(arg0: string, arg1: number, arg2: string): void;
}