import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$SecurityProviderConverter extends Object implements TypeConverter<JavaMap<any, any>> {
    constructor()
    convert(s: string): JavaMap<any, any>;
}