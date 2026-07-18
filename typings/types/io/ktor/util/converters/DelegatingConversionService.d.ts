import type { ConversionService } from '../../../../io/ktor/util/converters/ConversionService.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class DelegatingConversionService extends Object implements ConversionService {
    constructor(klass: KClass<Object>, decoder: ((param0: string[]) => Object | null) | null, encoder: ((param0: Object | null) => string[]) | null)
    // private decoder: ((param0: string[]) => Object | null) | null;
    // private encoder: ((param0: Object | null) => string[]) | null;
    // private klass: KClass<Object>;
    fromValues(values: string[], type: TypeInfo): Object | null;
    toValues(value: Object | null): string[];
}