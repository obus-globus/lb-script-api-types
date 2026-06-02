import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$ByteArrayConverter extends Object implements TypeConverter<number[]> {
    constructor()
    convert(value: string): number[];
}