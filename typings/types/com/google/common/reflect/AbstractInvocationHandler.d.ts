import type { InvocationHandler } from '../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractInvocationHandler extends Object implements InvocationHandler {
    static invokeDefault(paramarg0: Object, paramarg1: Method, ...paramarg2: (Object | null)[]): Object;
    constructor()
    equals(obj: Object | null): boolean;
    handleInvocation(proxy: Object, method: Method, args: Object[]): Object;
    hashCode(): number;
    invoke(proxy: Object, method: Method, args: Object[]): Object;
    toString(): string;
}