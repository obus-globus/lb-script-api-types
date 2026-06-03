import type { FunctionType } from '../../../com/mojang/datafixers/FunctionType.d.ts'
import type { FunctionType$Instance$Mu } from '../../../com/mojang/datafixers/FunctionType$Instance$Mu.d.ts'
import type { FunctionType$Mu } from '../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Functor } from '../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { Traversable } from '../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Procompose } from '../../../com/mojang/datafixers/optics/Procompose.d.ts'
import type { Procompose$Mu } from '../../../com/mojang/datafixers/optics/Procompose$Mu.d.ts'
import type { Wander } from '../../../com/mojang/datafixers/optics/Wander.d.ts'
import type { FunctorProfunctor } from '../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Mapping } from '../../../com/mojang/datafixers/optics/profunctors/Mapping.d.ts'
import type { MonoidProfunctor } from '../../../com/mojang/datafixers/optics/profunctors/MonoidProfunctor.d.ts'
import type { Monoidal } from '../../../com/mojang/datafixers/optics/profunctors/Monoidal.d.ts'
import type { TraversalP } from '../../../com/mojang/datafixers/optics/profunctors/TraversalP.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FunctionType$Instance extends Enum<FunctionType$Instance> implements App<FunctionType$Instance$Mu, FunctionType$Mu>, Mapping<FunctionType$Mu, FunctionType$Instance$Mu>, MonoidProfunctor<FunctionType$Mu, FunctionType$Instance$Mu>, Monoidal<FunctionType$Mu, FunctionType$Instance$Mu>, TraversalP<FunctionType$Mu, FunctionType$Instance$Mu> {
    static INSTANCE: FunctionType$Instance;
    static unbox(paramarg0: App<Object, Object>): Mapping<Object, Object>;
    static unbox(paramarg0: App<Object, Object>): Monoidal<Object, Object>;
    static unbox(paramarg0: App<Object, Object>): TraversalP<Object, Object>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FunctionType$Instance;
    static values(): (Object | null)[];
    private constructor()
    // private cap(arg0: Procompose<FunctionType$Mu, FunctionType$Mu, A, B, C>): App2<FunctionType$Mu, A, B>;
    compose(arg0: App2<P, B, C>, arg1: () => App2<P, A, B>): App2<P, A, C>;
    dimap(arg0: App2<FunctionType$Mu, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<FunctionType$Mu, C, D>;
    dimap(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<FunctionType$Mu, A, B>, App2<FunctionType$Mu, C, D>>;
    dimap(arg0: () => App2<FunctionType$Mu, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<FunctionType$Mu, C, D>;
    empty(): App2<FunctionType$Mu, void, void>;
    first(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Pair<A, C>, Pair<B, C>>;
    first(arg0: App2<P, A, B>): App2<P, Pair<A, C>, Pair<B, C>>;
    left(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Either<A, C>, Either<B, C>>;
    left(arg0: App2<P, A, B>): App2<P, Either<A, C>, Either<B, C>>;
    mapping(arg0: Functor<F, Object>, arg1: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, App<F, A>, App<F, B>>;
    par(arg0: App2<FunctionType$Mu, A, B>, arg1: () => App2<FunctionType$Mu, C, D>): App2<FunctionType$Mu, Pair<A, C>, Pair<B, D>>;
    plus(arg0: App2<Procompose$Mu<FunctionType$Mu, FunctionType$Mu>, A, B>): App2<FunctionType$Mu, A, B>;
    right(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Either<C, A>, Either<C, B>>;
    second(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Pair<C, A>, Pair<C, B>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, P, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse(arg0: Traversable<T, Object>, arg1: App2<P, A, B>): App2<P, App<T, A>, App<T, B>>;
    wander(arg0: Wander<S, T, A, B>, arg1: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, S, T>;
    zero(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, A, B>;
    name(): "INSTANCE";
}