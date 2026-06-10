import type { TypedOptic } from '../../../com/mojang/datafixers/TypedOptic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { Type$FieldNotFoundException } from '../../../com/mojang/datafixers/types/Type$FieldNotFoundException.d.ts'
import type { Type$TypeMatcher } from '../../../com/mojang/datafixers/types/Type$TypeMatcher.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NamedChoiceFinder$Matcher<FT extends Object | number | string | boolean, FR extends Object | number | string | boolean> extends Object implements Type$TypeMatcher<FT, FR> {
    constructor(arg0: string, arg1: Type<FT>, arg2: Type<FR>)
    // private name: string;
    // private resultType: Type<FR>;
    // private type: Type<FT>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    match<S extends Object | number | string | boolean>(arg0: Type<S>): Either<TypedOptic<S, Object, FT, FR>, Type$FieldNotFoundException>;
}