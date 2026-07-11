import type { Class } from '../../java/lang/Class.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Reflection extends Object {
    static convertWith(paramarg0: ValueConverter<Object>, paramarg1: string): Object | null;
    static findConverter(paramarg0: Class<Object>): ValueConverter<Object>;
    static instantiate(paramarg0: Constructor<Object>, ...paramarg1: (Object | null)[]): Object | null;
    static invoke(paramarg0: Method, ...paramarg1: (Object | null)[]): Object;
    private constructor()
}