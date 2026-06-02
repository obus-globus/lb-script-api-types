import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { ParameterBuilder } from '../../../../io/jsonwebtoken/impl/lang/ParameterBuilder.d.ts'
import type { ParameterReadable } from '../../../../io/jsonwebtoken/impl/lang/ParameterReadable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Parameters extends Object {
    static bigInt(paramarg0: string, paramarg1: string): ParameterBuilder<BigInteger>;
    static builder(paramarg0: Class<Object>): ParameterBuilder<Object>;
    static bytes(paramarg0: string, paramarg1: string): ParameterBuilder<number[]>;
    static bytesEquals(paramarg0: BigInteger, paramarg1: BigInteger): boolean;
    static equals(paramarg0: ParameterReadable, paramarg1: Object, paramarg2: Parameter<Object>): boolean;
    static registry(paramarg0: Object | null): { [key: string]: Object | null };
    static registry(paramarg0: { [key: string]: Object | null }, paramarg1: Object | null): { [key: string]: Object | null };
    static registry(paramarg0: E[]): { [key: string]: Object | null };
    static replace(paramarg0: { [key: string]: Object | null }, paramarg1: Parameter<Object>): { [key: string]: Object | null };
    static rfcDate(paramarg0: string, paramarg1: string): Parameter<Date>;
    static secretBigInt(paramarg0: string, paramarg1: string): Parameter<BigInteger>;
    static string(paramarg0: string, paramarg1: string): Parameter<string>;
    static stringSet(paramarg0: string, paramarg1: string): Parameter<Object>;
    static uri(paramarg0: string, paramarg1: string): Parameter<URI>;
    static x509Chain(paramarg0: string, paramarg1: string): Parameter<Object>;
    private constructor()
}