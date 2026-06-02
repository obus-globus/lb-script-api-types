import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProxyMethod } from '../../../../../net/lenni0451/reflect/proxy/impl/ProxyMethod.d.ts'
export class ProxyMethodBuilder extends Object {
    static buildProxyMethodClass(paramarg0: Class<Object>, paramarg1: Method, paramarg2: Method): Class<ProxyMethod>;
    constructor()
}