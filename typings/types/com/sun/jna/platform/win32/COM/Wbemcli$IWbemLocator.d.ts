import type { Unknown } from '../../../../../../com/sun/jna/platform/win32/COM/Unknown.d.ts'
import type { Wbemcli$IWbemContext } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemContext.d.ts'
import type { Wbemcli$IWbemServices } from '../../../../../../com/sun/jna/platform/win32/COM/Wbemcli$IWbemServices.d.ts'
import type { Guid$CLSID } from '../../../../../../com/sun/jna/platform/win32/Guid$CLSID.d.ts'
import type { Guid$GUID } from '../../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Guid$IID } from '../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { WTypes$BSTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
export class Wbemcli$IWbemLocator extends Unknown {
    static CLSID_WbemLocator: Guid$CLSID;
    static IID_IUNKNOWN: Guid$IID;
    static IID_IWbemLocator: Guid$GUID;
    static create(): Wbemcli$IWbemLocator;
    constructor()
    ConnectServer(arg0: WTypes$BSTR, arg1: WTypes$BSTR, arg2: WTypes$BSTR, arg3: WTypes$BSTR, arg4: number, arg5: WTypes$BSTR, arg6: Wbemcli$IWbemContext, arg7: PointerByReference): WinNT$HRESULT;
    ConnectServer(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: string, arg6: Wbemcli$IWbemContext): Wbemcli$IWbemServices;
}