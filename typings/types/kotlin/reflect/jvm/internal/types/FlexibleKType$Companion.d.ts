import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractKType } from '../../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
export class FlexibleKType$Companion extends Object {
    create(lowerBound: AbstractKType, upperBound: AbstractKType, isRawType: boolean, computeJavaType: (() => Type) | null): AbstractKType;
}