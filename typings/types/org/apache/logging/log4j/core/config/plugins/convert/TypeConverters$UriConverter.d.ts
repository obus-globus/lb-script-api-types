import type { URI } from '../../../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$UriConverter extends Object implements TypeConverter<URI> {
    constructor()
    convert(s: string): URI;
}