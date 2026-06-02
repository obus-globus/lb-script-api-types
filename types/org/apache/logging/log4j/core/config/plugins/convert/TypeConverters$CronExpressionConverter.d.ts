import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
import type { CronExpression } from '../../../../../../../../org/apache/logging/log4j/core/util/CronExpression.d.ts'
export class TypeConverters$CronExpressionConverter extends Object implements TypeConverter<CronExpression> {
    constructor()
    convert(s: string): CronExpression;
}