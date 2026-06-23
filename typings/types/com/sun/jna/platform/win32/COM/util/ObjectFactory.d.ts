import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { IDispatchCallback } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatchCallback.d.ts'
import type { IComEventCallbackListener } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackListener.d.ts'
import type { IRunningObjectTable } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IRunningObjectTable.d.ts'
import type { ProxyObject } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ProxyObject.d.ts'
import type { ComObject } from '../../../../../../../com/sun/jna/platform/win32/COM/util/annotation/ComObject.d.ts'
import type { Guid$GUID } from '../../../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { WinDef$LCID } from '../../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { WeakReference } from '../../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectFactory extends Object {
    constructor()
    readonly LCID: WinDef$LCID;
    // private registeredObjects: WeakReference<ProxyObject>[];
    createDispatchCallback(arg0: Class<Object>, arg1: IComEventCallbackListener): IDispatchCallback;
    createObject<T extends unknown>(arg0: Class<T>): T;
    createProxy<T extends unknown>(arg0: Class<T>, arg1: IDispatch): T;
    discoverClsId(arg0: ComObject): Guid$GUID;
    disposeAll(): void;
    fetchObject<T extends unknown>(arg0: Class<T>): T;
    finalize(): void;
    getLCID(): WinDef$LCID;
    getRunningObjectTable(): IRunningObjectTable;
    register(arg0: ProxyObject): void;
    setLCID(arg0: WinDef$LCID): void;
    unregister(arg0: ProxyObject): void;
}