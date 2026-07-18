import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConversionService } from '../../../../io/ktor/util/converters/ConversionService.d.ts'
import type { DataConversion$Configuration } from '../../../../io/ktor/util/converters/DataConversion$Configuration.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class DataConversion extends Object implements ConversionService {
    constructor(configuration: DataConversion$Configuration)
    // private converters: JavaMap<KClass<Object>, ConversionService>;
    fromValues(values: string[], type: TypeInfo): Object | null;
    toValues(value: Object | null): string[];
}