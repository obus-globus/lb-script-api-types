import type { Pattern } from '../../../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$PatternConverter extends Object implements TypeConverter<Pattern> {
    constructor()
    convert(s: string): Pattern;
}