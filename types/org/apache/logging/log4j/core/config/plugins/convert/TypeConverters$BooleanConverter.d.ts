import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$BooleanConverter extends Object implements TypeConverter<boolean> {
    constructor()
    convert(s: string): boolean;
}