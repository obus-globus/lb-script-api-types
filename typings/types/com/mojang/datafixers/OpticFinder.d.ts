import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OpticFinder<FT extends unknown> extends Object{
    findType<A extends unknown, FR extends unknown>(arg0: Type<A>, arg1: Type<FR>, arg2: boolean): Either<TypedOptic<A, Object, FT, FR>, Type$FieldNotFoundException>;
    findType<A extends unknown>(arg0: Type<A>, arg1: boolean): Either<TypedOptic<A, Object, FT, FT>, Type$FieldNotFoundException>;
    inField<GT extends unknown>(arg0: string, arg1: Type<GT>): OpticFinder<FT>;
    type(): Type<FT>;
}