import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Wbemcli$IEnumWbemClassObject } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IEnumWbemClassObject.d.ts'
import type { Wbemcli$IWbemClassObject } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemClassObject.d.ts'
import type { Wbemcli$IWbemContext } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemContext.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WTypes$BSTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class Wbemcli$IWbemServices extends Unknown {
    static IID_IUNKNOWN: Guid$IID;
    constructor()
    constructor(arg0: Pointer)
    ExecMethod(arg0: WTypes$BSTR, arg1: WTypes$BSTR, arg2: number, arg3: Wbemcli$IWbemContext, arg4: Pointer, arg5: PointerByReference, arg6: PointerByReference): WinNT$HRESULT;
    ExecMethod(arg0: string, arg1: string, arg2: number, arg3: Wbemcli$IWbemContext, arg4: Wbemcli$IWbemClassObject): Wbemcli$IWbemClassObject;
    ExecQuery(arg0: WTypes$BSTR, arg1: WTypes$BSTR, arg2: number, arg3: Wbemcli$IWbemContext, arg4: PointerByReference): WinNT$HRESULT;
    ExecQuery(arg0: string, arg1: string, arg2: number, arg3: Wbemcli$IWbemContext): Wbemcli$IEnumWbemClassObject;
    GetObject(arg0: WTypes$BSTR, arg1: number, arg2: Wbemcli$IWbemContext, arg3: PointerByReference, arg4: PointerByReference): WinNT$HRESULT;
    GetObject(arg0: string, arg1: number, arg2: Wbemcli$IWbemContext): Wbemcli$IWbemClassObject;
}