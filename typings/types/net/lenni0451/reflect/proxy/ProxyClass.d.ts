import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InvocationHandler } from '../../../../net/lenni0451/reflect/proxy/InvocationHandler.d.ts'
export class ProxyClass extends Object {
    constructor(arg0: Class<Object>, arg1: InvocationHandler)
    readonly invocationHandler: InvocationHandler;
    readonly proxyClass: Class<Object>;
    allocateInstance<T extends unknown>(): T;
    getInvocationHandler(): InvocationHandler;
    getProxyClass(): Class<Object>;
    instantiate<T extends unknown>(arg0: Class<Object>[], arg1: Object[]): T;
    setInvocationHandler(arg0: InvocationHandler): void;
}