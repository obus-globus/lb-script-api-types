import type { Converter } from '../../../../io/jsonwebtoken/impl/lang/Converter.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FieldElementConverter extends Object implements Converter<BigInteger, number[]> {
    constructor()
    applyFrom(arg0: number[]): BigInteger;
    applyTo(arg0: BigInteger): number[];
}