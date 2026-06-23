import type { TypedOptic } from '../../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Type$TypeMatcher<FT extends unknown, FR extends unknown> extends Object{
    match<S extends unknown>(arg0: Type<S>): Either<TypedOptic<S, Object, FT, FR>, Type$FieldNotFoundException>;
}