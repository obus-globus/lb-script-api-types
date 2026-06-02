import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$LevelConverter extends Object implements TypeConverter<Level> {
    constructor()
    convert(s: string): Level;
}