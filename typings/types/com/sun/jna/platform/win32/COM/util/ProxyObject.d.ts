import type { ConnectionPoint } from '../../../../../../../com/sun/jna/platform/win32/COM/ConnectionPoint.d.ts'
import type { IDispatch } from '../../../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { IComEventCallbackCookie } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackCookie.d.ts'
import type { IComEventCallbackListener } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackListener.d.ts'
import type { IConnectionPoint } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IConnectionPoint.d.ts'
import type { IDispatch as IDispatch_2 } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IDispatch.d.ts'
import type { IRawDispatchHandle } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IRawDispatchHandle.d.ts'
import type { ObjectFactory } from '../../../../../../../com/sun/jna/platform/win32/COM/util/ObjectFactory.d.ts'
import type { ComInterface } from '../../../../../../../com/sun/jna/platform/win32/COM/util/annotation/ComInterface.d.ts'
import type { ComMethod } from '../../../../../../../com/sun/jna/platform/win32/COM/util/annotation/ComMethod.d.ts'
import type { ComProperty } from '../../../../../../../com/sun/jna/platform/win32/COM/util/annotation/ComProperty.d.ts'
import type { Guid$IID } from '../../../../../../../com/sun/jna/platform/win32/Guid$IID.d.ts'
import type { OaIdl$DISPID } from '../../../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { Variant$VARIANT } from '../../../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { InvocationHandler } from '../../../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ProxyObject extends Object implements IConnectionPoint, IDispatch_2, IRawDispatchHandle, InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, ...paramarg2: Object[]): Object;
    constructor(arg0: Class<Object>, arg1: IDispatch, arg2: ObjectFactory)
    // private factory: ObjectFactory;
    readonly rawDispatch: IDispatch;
    // private theInterface: Class<Object>;
    // private unknownId: number;
    advise(arg0: Class<Object>, arg1: IComEventCallbackListener): IComEventCallbackCookie;
    dispose(): void;
    equals(arg0: Object | null): boolean;
    // private fetchRawConnectionPoint(arg0: Guid$IID): ConnectionPoint;
    finalize(): void;
    // private getAccessorName(arg0: Method, arg1: ComProperty): string;
    // private getIID(arg0: ComInterface): Guid$IID;
    // private getMethodName(arg0: Method, arg1: ComMethod): string;
    // private getMutatorName(arg0: Method, arg1: ComProperty): string;
    getProperty<T extends unknown>(arg0: Class<T>, arg1: OaIdl$DISPID, ...arg2: Object[]): T;
    getProperty<T extends unknown>(arg0: Class<T>, arg1: string, ...arg2: Object[]): T;
    getRawDispatch(): IDispatch;
    // private getUnknownId(): number;
    hashCode(): number;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
    invokeMethod<T extends unknown>(arg0: Class<T>, arg1: OaIdl$DISPID, ...arg2: Object[]): T;
    invokeMethod<T extends unknown>(arg0: Class<T>, arg1: string, ...arg2: Object[]): T;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: OaIdl$DISPID): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: OaIdl$DISPID, arg4: Variant$VARIANT): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: OaIdl$DISPID, arg4: Variant$VARIANT[]): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: string): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: string, arg4: Variant$VARIANT): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: IDispatch, arg3: string, arg4: Variant$VARIANT[]): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: OaIdl$DISPID): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: OaIdl$DISPID, arg3: Variant$VARIANT): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: OaIdl$DISPID, arg3: Variant$VARIANT[]): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: string): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: string, arg3: Variant$VARIANT): WinNT$HRESULT;
    oleMethod(arg0: number, arg1: Variant$VARIANT$ByReference, arg2: string, arg3: Variant$VARIANT[]): WinNT$HRESULT;
    queryInterface<T extends unknown>(arg0: Class<T>): T;
    resolveDispId(arg0: IDispatch, arg1: string): OaIdl$DISPID;
    resolveDispId(arg0: string): OaIdl$DISPID;
    setProperty<T extends unknown>(arg0: OaIdl$DISPID, arg1: T): void;
    // private setProperty(arg0: OaIdl$DISPID, ...arg1: Object[]): void;
    setProperty<T extends unknown>(arg0: string, arg1: T): void;
    // private setProperty(arg0: string, ...arg1: Object[]): void;
    toString(): string;
    unadvise(arg0: Class<Object>, arg1: IComEventCallbackCookie): void;
    // private unfoldWhenVarargs(arg0: Method, arg1: Object[]): Object[];
}