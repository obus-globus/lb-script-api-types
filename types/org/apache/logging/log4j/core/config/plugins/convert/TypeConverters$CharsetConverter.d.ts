import type { Charset } from '../../../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$CharsetConverter extends Object implements TypeConverter<Charset> {
    constructor()
    convert(s: string): Charset;
}