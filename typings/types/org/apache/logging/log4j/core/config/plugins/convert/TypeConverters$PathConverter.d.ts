import type { Path } from '../../../../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$PathConverter extends Object implements TypeConverter<Path> {
    constructor()
    convert(s: string): Path;
}