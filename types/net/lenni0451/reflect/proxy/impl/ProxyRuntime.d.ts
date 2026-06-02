import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProxyMethod } from '../../../../../net/lenni0451/reflect/proxy/impl/ProxyMethod.d.ts'
export class ProxyRuntime extends Object {
    static getMethodHandles(paramarg0: Class<Object>, paramarg1: Class<Object>, paramarg2: string, paramarg3: Object | null, paramarg4: Class<Object>): (Object | null)[];
    static instantiateProxyMethod(paramarg0: Class<ProxyMethod>, paramarg1: Object, paramarg2: Method): ProxyMethod;
    constructor()
}