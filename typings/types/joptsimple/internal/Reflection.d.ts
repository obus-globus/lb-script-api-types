import type { Class } from '../../java/lang/Class.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Reflection extends Object {
    static convertWith<V extends unknown>(paramarg0: ValueConverter<V>, paramarg1: string): V;
    static findConverter<V extends unknown>(paramarg0: Class<V>): ValueConverter<V>;
    static instantiate<T extends unknown>(paramarg0: Constructor<T>, ...paramarg1: Object[]): T;
    static invoke(paramarg0: Method, ...paramarg1: Object[]): Object;
    private constructor()
}