import type { UUID } from '../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$UuidConverter extends Object implements TypeConverter<UUID> {
    constructor()
    convert(s: string): UUID;
}