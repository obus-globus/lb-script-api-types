import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$SecurityProviderConverter extends Object implements TypeConverter<Provider> {
    constructor()
    convert(s: string): Provider;
}