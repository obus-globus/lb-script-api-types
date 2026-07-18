import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class DelegatingConversionService$Configuration<T extends unknown> extends Object {
    constructor(klass: KClass<T>)
    // private decoder: ((param0: string[]) => T) | null;
    /*not mapped: */ getDecoder$ktor_utils(): ((param0: string[]) => T) | null;
    // private encoder: ((param0: T) => string[]) | null;
    /*not mapped: */ getEncoder$ktor_utils(): ((param0: T) => string[]) | null;
    // private klass: KClass<T>;
    /*not mapped: */ getKlass$ktor_utils(): KClass<T>;
    decode(converter: (param0: string[]) => T): void;
    encode(converter: (param0: T) => string[]): void;
}