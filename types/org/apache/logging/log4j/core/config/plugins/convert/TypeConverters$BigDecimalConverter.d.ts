import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$BigDecimalConverter extends Object implements TypeConverter<BigDecimal> {
    constructor()
    convert(s: string): BigDecimal;
}