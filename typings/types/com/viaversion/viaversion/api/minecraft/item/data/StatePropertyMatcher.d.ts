import type { StatePropertyMatcher$RangedMatcher } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/StatePropertyMatcher$RangedMatcher.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Either } from '../../../../../../../com/viaversion/viaversion/util/Either.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StatePropertyMatcher extends Record {
    static ARRAY_TYPE: Type<StatePropertyMatcher[]>;
    static TYPE: Type<StatePropertyMatcher>;
    constructor(name: string, matcher: Either<string, StatePropertyMatcher$RangedMatcher>)
    // private matcher: Either<string, StatePropertyMatcher$RangedMatcher>;
    // private name: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    matcher(): Either<string, StatePropertyMatcher$RangedMatcher>;
    name(): string;
    toString(): string;
}