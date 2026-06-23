import type { Class } from '../../java/lang/Class.d.ts'
import type { Constructor } from '../../java/lang/reflect/Constructor.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class ConstructorInvokingValueConverter<V extends unknown> extends Object implements ValueConverter<V> {
    constructor(arg0: Constructor<V>)
    // private ctor: Constructor<V>;
    convert(arg0: string): V;
    valuePattern(): string;
    valueType(): Class<V>;
}