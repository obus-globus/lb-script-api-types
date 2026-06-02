import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Wbemcli$IWbemClassObject } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemClassObject.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
export class Wbemcli$IEnumWbemClassObject extends Unknown {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    Next(arg0: number, arg1: number): Wbemcli$IWbemClassObject[];
    Next(arg0: number, arg1: number, arg2: Pointer[], arg3: IntByReference): WinNT$HRESULT;
}