import type { IComEventCallbackCookie } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackCookie.d.ts'
import type { IComEventCallbackListener } from '../../../../../../../com/sun/jna/platform/win32/COM/util/IComEventCallbackListener.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IConnectionPoint extends Object{
    advise(arg0: Class<Object>, arg1: IComEventCallbackListener): IComEventCallbackCookie;
    unadvise(arg0: Class<Object>, arg1: IComEventCallbackCookie): void;
}