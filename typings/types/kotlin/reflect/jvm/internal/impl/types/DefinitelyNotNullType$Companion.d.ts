import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { DefinitelyNotNullType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DefinitelyNotNullType.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export class DefinitelyNotNullType$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    // private canHaveUndefinedNullability(arg0: UnwrappedType): boolean;
    makeDefinitelyNotNull(arg0: UnwrappedType, arg1: boolean, arg2: boolean): DefinitelyNotNullType;
    // private makesSenseToBeDefinitelyNotNull(arg0: UnwrappedType, arg1: boolean): boolean;
}