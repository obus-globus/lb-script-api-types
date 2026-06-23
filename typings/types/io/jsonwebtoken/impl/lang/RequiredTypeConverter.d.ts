import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequiredTypeConverter<T extends unknown> extends Object implements Converter<T, Object> {
    constructor(arg0: Class<T>)
    // private type: Class<T>;
    applyFrom(arg0: Object): T;
    applyTo(arg0: T): Object;
}