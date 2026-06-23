import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Builder } from '../../../../io/jsonwebtoken/lang/Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParameterBuilder<T extends unknown> extends Builder<Parameter<T>>, Object{
    list(): ParameterBuilder<T[]>;
    set(): ParameterBuilder<T[]>;
    setConverter(arg0: Converter<T, Object>): ParameterBuilder<T>;
    setId(arg0: string): ParameterBuilder<T>;
    setName(arg0: string): ParameterBuilder<T>;
    setSecret(arg0: boolean): ParameterBuilder<T>;
}