import type { Class } from '../../../java/lang/Class.d.ts'
import type { MethodHandle } from '../../../java/lang/invoke/MethodHandle.d.ts'
import type { Constructor } from '../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Constructors extends Object {
    static getDeclaredConstructor<T extends unknown>(paramarg0: Class<T>, ...paramarg1: Class<Object>[]): Constructor<T>;
    static getDeclaredConstructors<T extends unknown>(paramarg0: Class<T>): Constructor<T>[];
    static invoke<T extends unknown>(paramarg0: Constructor<T>, ...paramarg1: Object[]): T;
    static makeInvokable(paramarg0: MethodHandle): MethodHandle;
    constructor()
}