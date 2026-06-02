import type { File } from '../../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$FileConverter extends Object implements TypeConverter<File> {
    constructor()
    convert(s: string): File;
}