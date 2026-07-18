import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConversionService } from '../../../../io/ktor/util/converters/ConversionService.d.ts'
import type { DelegatingConversionService$Configuration } from '../../../../io/ktor/util/converters/DelegatingConversionService$Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
export class DataConversion$Configuration extends Object {
    constructor()
    // private converters: JavaMap<KClass<Object>, ConversionService>;
    /*not mapped: */ getConverters$ktor_utils(): JavaMap<KClass<Object>, ConversionService>;
    convert<T extends unknown>(configure: (param0: DelegatingConversionService$Configuration<T>) => void): void;
    convert(type: KClass<Object>, convertor: ConversionService): void;
    convert<T extends unknown>(type: KType, configure: (param0: DelegatingConversionService$Configuration<T>) => void): void;
}