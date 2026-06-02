import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Duration } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/Duration.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$DurationConverter extends Object implements TypeConverter<Duration> {
    constructor()
    convert(s: string): Duration;
}