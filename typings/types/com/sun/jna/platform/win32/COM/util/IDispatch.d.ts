import type { IUnknown } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IUnknown.d.ts'
import type { OaIdl$DISPID } from '../../../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IDispatch extends IUnknown, Object{
    getProperty<T extends unknown>(arg0: Class<T>, arg1: OaIdl$DISPID, ...arg2: Object[]): T;
    getProperty<T extends unknown>(arg0: Class<T>, arg1: string, ...arg2: Object[]): T;
    invokeMethod<T extends unknown>(arg0: Class<T>, arg1: OaIdl$DISPID, ...arg2: Object[]): T;
    invokeMethod<T extends unknown>(arg0: Class<T>, arg1: string, ...arg2: Object[]): T;
    setProperty<T extends unknown>(arg0: OaIdl$DISPID, arg1: T): void;
    setProperty<T extends unknown>(arg0: string, arg1: T): void;
}