import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Pointer } from '../../../../../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../../../../../com/sun/jna/WString.d.ts'
import type { DispatchListener } from '../../../../../../../com/sun/jna/platform/win32/COM/DispatchListener.d.ts'
import type { IDispatchCallback } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatchCallback.d.ts'
import type { IComEventCallbackListener } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackListener.d.ts'
import type { ObjectFactory } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ObjectFactory.d.ts'
import type { ComEventCallback } from '../../../../../../../com/sun/jna/platform/win32/COM/util/annotation/ComEventCallback.d.ts'
import type { Guid$IID } from '../../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { Guid$REFIID } from '../../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$DISPID } from '../../../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { OaIdl$DISPIDByReference } from '../../../../../../../com/sun/jna/platform/win32/OaIdl$DISPIDByReference.d.ts'
import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { OleAuto$DISPPARAMS$ByReference } from '../../../../../../../com/sun/jna/platform/win32/OleAuto$DISPPARAMS$ByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WinDef$LCID } from '../../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$UINT } from '../../../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinDef$UINTByReference } from '../../../../../../../com/sun/jna/platform/win32/WinDef$UINTByReference.d.ts'
import type { WinDef$WORD } from '../../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HRESULT } from '../../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CallbackProxy extends Object implements IDispatchCallback {
    static IID_IDISPATCH: Guid$IID;
    static IID_IUNKNOWN: Guid$IID;
    constructor(arg0: ObjectFactory, arg1: Class<Object>, arg2: IComEventCallbackListener)
    // private comEventCallbackInterface: Class<Object>;
    // private comEventCallbackListener: IComEventCallbackListener;
    dispatchListener: DispatchListener;
    // private dsipIdMap: JavaMap<OaIdl$DISPID, Method>;
    // private factory: ObjectFactory;
    // private listenedToRiid: Guid$REFIID;
    AddRef(): number;
    GetIDsOfNames(arg0: Guid$REFIID, arg1: WString[], arg2: number, arg3: WinDef$LCID, arg4: OaIdl$DISPIDByReference): WinNT$HRESULT;
    GetTypeInfo(arg0: WinDef$UINT, arg1: WinDef$LCID, arg2: PointerByReference): WinNT$HRESULT;
    GetTypeInfoCount(arg0: WinDef$UINTByReference): WinNT$HRESULT;
    Invoke(arg0: OaIdl$DISPID, arg1: Guid$REFIID, arg2: WinDef$LCID, arg3: WinDef$WORD, arg4: OleAuto$DISPPARAMS$ByReference, arg5: Variant$VARIANT$ByReference, arg6: OaIdl$EXCEPINFO$ByReference, arg7: IntByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    // private createDispIdMap(arg0: Class<Object>): JavaMap<OaIdl$DISPID, Method>;
    // private createRIID(arg0: Class<Object>): Guid$REFIID;
    // private fetchDispIdFromName(arg0: ComEventCallback): number;
    getPointer(): Pointer;
    invokeOnThread(arg0: OaIdl$DISPID, arg1: Guid$REFIID, arg2: WinDef$LCID, arg3: WinDef$WORD, arg4: OleAuto$DISPPARAMS$ByReference): void;
}