import type { Class } from '../../java/lang/Class.d.ts'
import type { Method } from '../../java/lang/reflect/Method.d.ts'
import type { ValueConverter } from '../../joptsimple/ValueConverter.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MethodInvokingValueConverter<V extends Object | number | string | boolean> extends Object implements ValueConverter<V> {
    constructor(arg0: Method, arg1: Class<V>)
    // private clazz: Class<V>;
    // private method: Method;
    convert(arg0: string): V;
    valuePattern(): string;
    valueType(): Class<V>;
}