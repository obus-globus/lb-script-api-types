import type { TypeToken } from '../../../com/google/common/reflect/TypeToken.d.ts'
import type { TypedOptic$Element } from '../../../com/mojang/datafixers/TypedOptic$Element.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Optic } from '../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { Type } from '../../../com/mojang/datafixers/types/Type.d.ts'
import type { TaggedChoice$TaggedChoiceType } from '../../../com/mojang/datafixers/types/templates/TaggedChoice$TaggedChoiceType.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TypedOptic<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Record {
    static adapter(paramarg0: Type<Object>, paramarg1: Type<Object>): TypedOptic<Object, Object, Object, Object>;
    static compoundListElements(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Pair<Object, Object>[], Pair<Object, Object>[], Object, Object>;
    static compoundListKeys(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Pair<Object, Object>[], Pair<Object, Object>[], Object, Object>;
    static inj1(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Either<Object, Object>, Either<Object, Object>, Object, Object>;
    static inj2(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Either<Object, Object>, Either<Object, Object>, Object, Object>;
    static instanceOf(paramarg0: TypeToken<K1>[], paramarg1: TypeToken<K1>): boolean;
    static list(paramarg0: Type<Object>, paramarg1: Type<Object>): TypedOptic<(Object | null)[], (Object | null)[], Object, Object>;
    static proj1(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Pair<Object, Object>, Pair<Object, Object>, Object, Object>;
    static proj2(paramarg0: Type<Object>, paramarg1: Type<Object>, paramarg2: Type<Object>): TypedOptic<Pair<Object, Object>, Pair<Object, Object>, Object, Object>;
    static tagged(paramarg0: TaggedChoice$TaggedChoiceType<Object>, paramarg1: Object | null, paramarg2: Type<Object>, paramarg3: Type<Object>): TypedOptic<Pair<Object, Object>, Pair<Object, Object>, Object, Object>;
    constructor(arg0: TypeToken<K1>, arg1: Type<S>, arg2: Type<T>, arg3: Type<A>, arg4: Type<B>, arg5: Optic<any, S, T, A, B>)
    constructor(bounds: TypeToken<K1>[], elements: TypedOptic$Element<Object, Object, Object, Object>[])
    constructor(arg0: TypeToken<K1>[], arg1: Type<S>, arg2: Type<T>, arg3: Type<A>, arg4: Type<B>, arg5: Optic<any, S, T, A, B>)
    // private bounds: TypeToken<K1>[];
    // private elements: TypedOptic$Element<Object, Object, Object, Object>[];
    aType(): Type<A>;
    apply<P extends K2, Proof2 extends K1>(arg0: TypeToken<Proof2>, arg1: App<Proof2, P>, arg2: App2<P, A, B>): App2<P, S, T>;
    bType(): Type<B>;
    bounds(): TypeToken<K1>[];
    castOuter(arg0: Type<S>, arg1: Type<T>): TypedOptic<S, T, A, B>;
    castOuterUnchecked<S2 extends Object | number | string | boolean, T2 extends Object | number | string | boolean>(arg0: Type<S2>, arg1: Type<T2>): TypedOptic<S2, T2, A, B>;
    compose<A1 extends Object | number | string | boolean, B1 extends Object | number | string | boolean>(arg0: TypedOptic<A, B, A1, B1>): TypedOptic<S, T, A1, B1>;
    elements(): TypedOptic$Element<Object, Object, Object, Object>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    innermost(): Optic<any, Object, Object, A, B>;
    // private innermostElement(): TypedOptic$Element<Object, Object, A, B>;
    outermost(): Optic<any, S, T, Object, Object>;
    // private outermostElement(): TypedOptic$Element<S, T, Object, Object>;
    sType(): Type<S>;
    tType(): Type<T>;
    toString(): string;
    upCast<Proof2 extends K1>(arg0: TypeToken<Proof2>): Optional<Optic<Proof2, S, T, A, B>>;
}