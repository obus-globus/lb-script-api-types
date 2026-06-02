import type { URL } from '../../../../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$UrlConverter extends Object implements TypeConverter<URL> {
    constructor()
    convert(s: string): URL;
}