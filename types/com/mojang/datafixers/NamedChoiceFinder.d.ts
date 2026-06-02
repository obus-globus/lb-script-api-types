import type { OpticFinder } from '../../../com/mojang/datafixers/OpticFinder.d.ts'
import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NamedChoiceFinder<FT extends Object | number | string | boolean> extends Object implements OpticFinder<FT> {
    constructor(arg0: string, arg1: Type<FT>)
    // private name: string;
    // private type: Type<FT>;
    equals(arg0: Object | null): boolean;
    findType(arg0: Type<A>, arg1: Type<FR>, arg2: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    findType(arg0: Type<A>, arg1: boolean): Either<TypedOptic<A, Object, FT, FT>, Type$FieldNotFoundException>;
    hashCode(): number;
    inField(arg0: string, arg1: Type<GT>): OpticFinder<FT>;
    type(): Type<FT>;
}