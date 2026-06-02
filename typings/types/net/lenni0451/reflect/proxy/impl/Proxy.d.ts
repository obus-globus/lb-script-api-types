import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { InvocationHandler } from '../../../../../net/lenni0451/reflect/proxy/InvocationHandler.d.ts'
export interface Proxy extends Object{
    getInvocationHandler(): InvocationHandler;
    setInvocationHandler(arg0: InvocationHandler): void;
}