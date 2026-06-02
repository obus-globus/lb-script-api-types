import type { BigInteger } from '../../../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TypeConverter } from '../../../../../../../../org/apache/logging/log4j/core/config/plugins/convert/TypeConverter.d.ts'
export class TypeConverters$BigIntegerConverter extends Object implements TypeConverter<BigInteger> {
    constructor()
    convert(s: string): BigInteger;
}