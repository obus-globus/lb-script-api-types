import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RedactedValueConverter<T extends Object | number | string | boolean> extends Object implements Converter<T, Object> {
    constructor(arg0: Converter<T, Object>)
    // private delegate: Converter<T, Object>;
    applyFrom(arg0: Object): T;
    applyTo(arg0: T): Object;
}