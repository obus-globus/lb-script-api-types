import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProxyMethod extends Object{
    cancel(): Object;
    getInvokedMethod(): Method;
    invokeSuper(arg0: Object[]): Object;
    invokeWith(arg0: Object, arg1: Object[]): Object;
}