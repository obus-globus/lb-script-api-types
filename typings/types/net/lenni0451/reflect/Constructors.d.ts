import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Constructors extends Object {
    static getDeclaredConstructor(paramarg0: Class<Object>, ...paramarg1: Class<Object>[]): Constructor<Object>;
    static getDeclaredConstructors(paramarg0: Class<Object>): Constructor<Object>[];
    static invoke(paramarg0: Constructor<Object>, ...paramarg1: Object[]): Object | null;
    static makeInvokable(paramarg0: MethodHandle): MethodHandle;
    constructor()
}