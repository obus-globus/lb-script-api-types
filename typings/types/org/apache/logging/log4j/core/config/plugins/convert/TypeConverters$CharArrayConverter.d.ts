import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$CharArrayConverter extends Object implements TypeConverter<string[]> {
    constructor()
    convert(s: string): string[];
}