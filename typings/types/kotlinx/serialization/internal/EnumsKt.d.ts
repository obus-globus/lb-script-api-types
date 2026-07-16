import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
export class EnumsKt extends Object {
    static createAnnotatedEnumSerializer(paramarg0: string, paramarg1: (Object | null)[], paramarg2: string[], paramarg3: Annotation[][], paramarg4: Annotation[]): KSerializer<Object>;
    static createMarkedEnumSerializer(paramarg0: string, paramarg1: (Object | null)[], paramarg2: string[], paramarg3: Annotation[][]): KSerializer<Object>;
    static createSimpleEnumSerializer(paramarg0: string, paramarg1: (Object | null)[]): KSerializer<Object>;
}