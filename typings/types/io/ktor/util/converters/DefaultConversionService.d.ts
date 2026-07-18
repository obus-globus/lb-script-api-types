import type { ConversionService } from '../../../../io/ktor/util/converters/ConversionService.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class DefaultConversionService extends Object implements ConversionService {
    static INSTANCE: DefaultConversionService;
    // private convertPrimitives(klass: KClass<Object>, value: string): Object | null;
    fromValue(value: string, klass: KClass<Object>): Object;
    fromValues(values: string[], type: TypeInfo): Object | null;
    // private throwConversionException(typeName: string): void;
    toValues(value: Object | null): string[];
}