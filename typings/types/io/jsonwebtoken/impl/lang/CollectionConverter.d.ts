import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CollectionConverter<T extends unknown, C extends T[]> extends Object implements Converter<C, Object> {
    static forList<T extends unknown>(paramarg0: Converter<T, Object>): CollectionConverter<T, T[]>;
    static forSet<T extends unknown>(paramarg0: Converter<T, Object>): CollectionConverter<T, T[]>;
    constructor(arg0: Converter<T, Object>, arg1: Function<number, C>)
    // private elementConverter: Converter<T, Object>;
    // private fn: Function<number, C>;
    applyFrom(arg0: Object): C;
    applyTo(arg0: C): Object;
    // private toElementList(arg0: (Object | null)[]): C;
}