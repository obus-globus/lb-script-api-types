import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KmFunction } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmFunction.d.ts'
import type { KmProperty } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmTypeAlias } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/KmTypeAlias.d.ts'
export interface KmDeclarationContainer extends Object{
    getFunctions(): KmFunction[];
    getProperties(): KmProperty[];
    getTypeAliases(): KmTypeAlias[];
}