import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$SecurityProviderConverter extends Object implements TypeConverter<{ [key: string]: any }> {
    constructor()
    convert(s: string): { [key: string]: any };
}