import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { DelegatingConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/DelegatingConverter.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { TextVerifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class VerifyingConverter<T extends unknown> extends DelegatingConverter<T> {
    static isValid(paramarg0: DataConverter<Object>, paramarg1: Object | null, paramarg2: Class<TextVerifier>, paramarg3: (param0: TextVerifier | null, param1: Object | null) => boolean): boolean;
    static verify(paramarg0: Class<TextVerifier>, paramarg1: (param0: Object | null, param1: TextVerifier | null) => Result<void>): (param0: DataConverter<Object>, param1: Object | null) => Result<void>;
    static verify(paramarg0: Class<TextVerifier>, paramarg1: (param0: TextVerifier | null, param1: Object | null) => boolean, paramarg2: string): (param0: DataConverter<Object>, param1: Object | null) => Result<void>;
    constructor(arg0: DataConverter<T>, arg1: TextVerifier)
    readonly textVerifier: TextVerifier;
    getTextVerifier(): TextVerifier;
}