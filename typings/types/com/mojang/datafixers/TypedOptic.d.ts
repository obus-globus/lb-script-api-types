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
export class TypedOptic<S extends unknown, T extends unknown, A extends unknown, B extends unknown> extends Record {
    static adapter<S extends unknown, T extends unknown>(paramarg0: Type<S>, paramarg1: Type<T>): TypedOptic<S, T, S, T>;
    static compoundListElements<K extends unknown, V extends unknown, V2 extends unknown>(paramarg0: Type<K>, paramarg1: Type<V>, paramarg2: Type<V2>): TypedOptic<Pair<K, V>[], Pair<K, V2>[], V, V2>;
    static compoundListKeys<K extends unknown, V extends unknown, K2 extends unknown>(paramarg0: Type<K>, paramarg1: Type<K2>, paramarg2: Type<V>): TypedOptic<Pair<K, V>[], Pair<K2, V>[], K, K2>;
    static inj1<F extends unknown, G extends unknown, F2 extends unknown>(paramarg0: Type<F>, paramarg1: Type<G>, paramarg2: Type<F2>): TypedOptic<Either<F, G>, Either<F2, G>, F, F2>;
    static inj2<F extends unknown, G extends unknown, G2 extends unknown>(paramarg0: Type<F>, paramarg1: Type<G>, paramarg2: Type<G2>): TypedOptic<Either<F, G>, Either<F, G2>, G, G2>;
    static instanceOf<Proof2 extends K1>(paramarg0: TypeToken<K1>[], paramarg1: TypeToken<Proof2>): boolean;
    static list<A extends unknown, B extends unknown>(paramarg0: Type<A>, paramarg1: Type<B>): TypedOptic<A[], B[], A, B>;
    static proj1<F extends unknown, G extends unknown, F2 extends unknown>(paramarg0: Type<F>, paramarg1: Type<G>, paramarg2: Type<F2>): TypedOptic<Pair<F, G>, Pair<F2, G>, F, F2>;
    static proj2<F extends unknown, G extends unknown, G2 extends unknown>(paramarg0: Type<F>, paramarg1: Type<G>, paramarg2: Type<G2>): TypedOptic<Pair<F, G>, Pair<F, G2>, G, G2>;
    static tagged<K extends unknown, A extends unknown, B extends unknown>(paramarg0: TaggedChoice$TaggedChoiceType<K>, paramarg1: K, paramarg2: Type<A>, paramarg3: Type<B>): TypedOptic<Pair<K, Object>, Pair<K, Object>, A, B>;
    constructor(arg0: TypeToken<K1>, arg1: Type<S>, arg2: Type<T>, arg3: Type<A>, arg4: Type<B>, arg5: Optic<any, S, T, A, B>)
    constructor(arg0: TypeToken<K1>[], arg1: Type<S>, arg2: Type<T>, arg3: Type<A>, arg4: Type<B>, arg5: Optic<any, S, T, A, B>)
    constructor(bounds: TypeToken<K1>[], elements: TypedOptic$Element<Object, Object, Object, Object>[])
    // private bounds: TypeToken<K1>[];
    // private elements: TypedOptic$Element<Object, Object, Object, Object>[];
    aType(): Type<A>;
    apply<P extends K2, Proof2 extends K1>(arg0: TypeToken<Proof2>, arg1: App<Proof2, P>, arg2: App2<P, A, B>): App2<P, S, T>;
    bType(): Type<B>;
    bounds(): TypeToken<K1>[];
    castOuter(arg0: Type<S>, arg1: Type<T>): TypedOptic<S, T, A, B>;
    castOuterUnchecked<S2 extends unknown, T2 extends unknown>(arg0: Type<S2>, arg1: Type<T2>): TypedOptic<S2, T2, A, B>;
    compose<A1 extends unknown, B1 extends unknown>(arg0: TypedOptic<A, B, A1, B1>): TypedOptic<S, T, A1, B1>;
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