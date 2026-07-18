import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConversionService extends Object{
    fromValues(values: string[], type: TypeInfo): Object | null;
    toValues(value: Object | null): string[];
}