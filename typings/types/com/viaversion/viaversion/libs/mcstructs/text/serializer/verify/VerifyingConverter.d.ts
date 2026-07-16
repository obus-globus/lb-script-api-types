import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { DelegatingConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/DelegatingConverter.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { TextVerifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class VerifyingConverter<T extends unknown> extends DelegatingConverter<T> {
    static isValid<T extends unknown, V extends TextVerifier>(paramarg0: DataConverter<Object>, paramarg1: T, paramarg2: Class<V>, paramarg3: (param0: V, param1: T) => boolean): boolean;
    static verify<T extends unknown, V extends TextVerifier>(paramarg0: Class<V>, paramarg1: (param0: T, param1: V) => Result<void>): (param0: DataConverter<Object>, param1: T) => Result<void>;
    static verify<T extends unknown, V extends TextVerifier>(paramarg0: Class<V>, paramarg1: (param0: V, param1: T) => boolean, paramarg2: string): (param0: DataConverter<Object>, param1: T) => Result<void>;
    constructor(arg0: DataConverter<T>, arg1: TextVerifier)
    readonly textVerifier: TextVerifier;
    getTextVerifier(): TextVerifier;
}