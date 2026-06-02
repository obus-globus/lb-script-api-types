import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class EnumsKt extends Object {
    static createAnnotatedEnumSerializer(paramarg0: string, paramarg1: Object | null, paramarg2: (Object | null)[], paramarg3: (Object | null)[], paramarg4: (Object | null)[]): KSerializer<Object>;
    static createMarkedEnumSerializer(paramarg0: string, paramarg1: Object | null, paramarg2: (Object | null)[], paramarg3: (Object | null)[]): KSerializer<Object>;
    static createSimpleEnumSerializer(paramarg0: string, paramarg1: Object | null): KSerializer<Object>;
}