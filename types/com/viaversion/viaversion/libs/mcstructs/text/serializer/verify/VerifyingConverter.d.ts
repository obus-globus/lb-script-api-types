import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { DelegatingConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/impl/DelegatingConverter.d.ts'
import type { TextVerifier } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/serializer/verify/TextVerifier.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiFunction } from '../../../../../../../../java/util/function/BiFunction.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class VerifyingConverter<T extends Object | number | string | boolean> extends DelegatingConverter<T> {
    static isValid(paramarg0: DataConverter<Object>, paramarg1: Object | null, paramarg2: Class<Object>, paramarg3: (param0: Object | null, param1: Object | null) => kotlin.Boolean): boolean;
    static verify(paramarg0: Class<Object>, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => Object | null;
    static verify(paramarg0: Class<Object>, paramarg1: (param0: Object | null, param1: Object | null) => kotlin.Boolean, paramarg2: string): (param0: Object | null, param1: Object | null) => Object | null;
    constructor(arg0: DataConverter<T>, arg1: TextVerifier)
    readonly textVerifier: TextVerifier;
    getTextVerifier(): TextVerifier;
}