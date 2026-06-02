import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultParameter<T extends Object | number | string | boolean> extends Object implements Parameter<T> {
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: Class<T>, arg4: Class<E[]>, arg5: Converter<T, Object>)
    // private COLLECTION_TYPE: Class<E[]>;
    // private CONVERTER: Converter<T, Object>;
    // private ID: string;
    // private IDIOMATIC_TYPE: Class<T>;
    // private NAME: string;
    // private SECRET: boolean;
    applyFrom(arg0: Object): T;
    applyTo(arg0: T): Object;
    cast(arg0: Object): T;
    equals(arg0: Object | null): boolean;
    getId(): string;
    getName(): string;
    hashCode(): number;
    isSecret(): boolean;
    supports(arg0: Object): boolean;
    toString(): string;
}