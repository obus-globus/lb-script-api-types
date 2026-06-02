import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionConverter<T extends Object | number | string | boolean, C extends E[]> extends Object implements Converter<C, Object> {
    static forList(paramarg0: Converter<Object, Object>): CollectionConverter<Object, Object>;
    static forSet(paramarg0: Converter<Object, Object>): CollectionConverter<Object, Object>;
    constructor(arg0: Converter<T, Object>, arg1: Function<number, C>)
    // private elementConverter: Converter<T, Object>;
    // private fn: Function<number, C>;
    applyFrom(arg0: Object): C;
    applyTo(arg0: C): Object;
    // private toElementList(arg0: E[]): C;
}