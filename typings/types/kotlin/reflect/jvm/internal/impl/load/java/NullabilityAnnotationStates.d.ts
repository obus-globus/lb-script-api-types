import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export interface NullabilityAnnotationStates<T extends unknown> extends Object{
    get(arg0: FqName): T;
}