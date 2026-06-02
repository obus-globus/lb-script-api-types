import type { Method } from '../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface InvocationHandler extends Object{
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
}