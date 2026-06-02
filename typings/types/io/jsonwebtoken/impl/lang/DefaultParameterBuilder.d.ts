import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { ParameterBuilder } from '../../../../io/jsonwebtoken/impl/lang/ParameterBuilder.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultParameterBuilder<T extends Object | number | string | boolean> extends Object implements ParameterBuilder<T> {
    constructor(arg0: Class<T>)
    // private collectionType: Class<E[]>;
    // private converter: Converter<T, Object>;
    // private id: string;
    // private name: string;
    // private secret: boolean;
    // private type: Class<T>;
    build(): Parameter<T>;
    list(): ParameterBuilder<T[]>;
    set(): ParameterBuilder<T[]>;
    setConverter(arg0: Converter<T, Object>): ParameterBuilder<T>;
    setId(arg0: string): ParameterBuilder<T>;
    setName(arg0: string): ParameterBuilder<T>;
    setSecret(arg0: boolean): ParameterBuilder<T>;
}