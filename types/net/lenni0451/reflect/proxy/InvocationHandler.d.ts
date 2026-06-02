import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProxyMethod } from '../../../../net/lenni0451/reflect/proxy/impl/ProxyMethod.d.ts'
export interface InvocationHandler extends Object{
    invoke(arg0: Object, arg1: ProxyMethod, arg2: Object[]): Object;
}