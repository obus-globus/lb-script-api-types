import type { FunctionType } from '../../../com/mojang/datafixers/FunctionType.d.ts'
import type { FunctionType$Instance$Mu } from '../../../com/mojang/datafixers/FunctionType$Instance$Mu.d.ts'
import type { FunctionType$Mu } from '../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { App } from '../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Functor } from '../../../com/mojang/datafixers/kinds/Functor.d.ts'
import type { K1 } from '../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { K2 } from '../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Traversable } from '../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Traversable$Mu } from '../../../com/mojang/datafixers/kinds/Traversable$Mu.d.ts'
import type { Procompose } from '../../../com/mojang/datafixers/optics/Procompose.d.ts'
import type { Procompose$Mu } from '../../../com/mojang/datafixers/optics/Procompose$Mu.d.ts'
import type { Wander } from '../../../com/mojang/datafixers/optics/Wander.d.ts'
import type { FunctorProfunctor } from '../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor.d.ts'
import type { FunctorProfunctor$Mu } from '../../../com/mojang/datafixers/optics/profunctors/FunctorProfunctor$Mu.d.ts'
import type { Mapping } from '../../../com/mojang/datafixers/optics/profunctors/Mapping.d.ts'
import type { Mapping$Mu } from '../../../com/mojang/datafixers/optics/profunctors/Mapping$Mu.d.ts'
import type { MonoidProfunctor } from '../../../com/mojang/datafixers/optics/profunctors/MonoidProfunctor.d.ts'
import type { Monoidal } from '../../../com/mojang/datafixers/optics/profunctors/Monoidal.d.ts'
import type { Monoidal$Mu } from '../../../com/mojang/datafixers/optics/profunctors/Monoidal$Mu.d.ts'
import type { TraversalP } from '../../../com/mojang/datafixers/optics/profunctors/TraversalP.d.ts'
import type { TraversalP$Mu } from '../../../com/mojang/datafixers/optics/profunctors/TraversalP$Mu.d.ts'
import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class FunctionType$Instance extends Enum<FunctionType$Instance> implements App<FunctionType$Instance$Mu, FunctionType$Mu>, Mapping<FunctionType$Mu, FunctionType$Instance$Mu>, MonoidProfunctor<FunctionType$Mu, FunctionType$Instance$Mu>, Monoidal<FunctionType$Mu, FunctionType$Instance$Mu>, TraversalP<FunctionType$Mu, FunctionType$Instance$Mu> {
    static INSTANCE: FunctionType$Instance;
    static unbox(paramarg0: App<Mapping$Mu, K2>): Mapping<K2, Mapping$Mu>;
    static unbox(paramarg0: App<Monoidal$Mu, K2>): Monoidal<K2, Monoidal$Mu>;
    static unbox(paramarg0: App<TraversalP$Mu, K2>): TraversalP<K2, TraversalP$Mu>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FunctionType$Instance;
    static values(): (Object | null)[];
    private constructor()
    // private cap<A extends unknown, B extends unknown, C extends unknown>(arg0: Procompose<FunctionType$Mu, FunctionType$Mu, A, B, C>): App2<FunctionType$Mu, A, B>;
    compose<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, B, C>, arg1: () => App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, A, C>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<FunctionType$Mu, C, D>;
    dimap<A extends unknown, B extends unknown, C extends unknown, D extends unknown>(arg0: (param0: C) => A, arg1: (param0: B) => D): FunctionType<App2<FunctionType$Mu, A, B>, App2<FunctionType$Mu, C, D>>;
    dimap<C extends unknown, D extends unknown, A extends unknown, B extends unknown>(arg0: () => App2<FunctionType$Mu, A, B>, arg1: (param0: C) => A, arg2: (param0: B) => D): App2<FunctionType$Mu, C, D>;
    empty(): App2<FunctionType$Mu, void, void>;
    first<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Pair<A, C>, Pair<B, C>>;
    left<A extends unknown, C extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Either<A, C>, Either<B, C>>;
    mapping<F extends K1, A extends unknown, B extends unknown>(arg0: Functor<F, any>, arg1: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, App<F, A>, App<F, B>>;
    par<A extends unknown, C extends unknown, B extends unknown, D extends unknown>(arg0: App2<FunctionType$Mu, A, B>, arg1: () => App2<FunctionType$Mu, C, D>): App2<FunctionType$Mu, Pair<A, C>, Pair<B, D>>;
    plus<A extends unknown, B extends unknown>(arg0: App2<Procompose$Mu<FunctionType$Mu, FunctionType$Mu>, A, B>): App2<FunctionType$Mu, A, B>;
    right<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Either<C, A>, Either<C, B>>;
    second<C extends unknown, A extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, Pair<C, A>, Pair<C, B>>;
    toFP3(): FunctorProfunctor<Traversable$Mu, FunctionType$Mu, FunctorProfunctor$Mu<Traversable$Mu>>;
    traverse<T extends K1, A extends unknown, B extends unknown>(arg0: Traversable<T, any>, arg1: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, App<T, A>, App<T, B>>;
    wander<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(arg0: Wander<S, T, A, B>, arg1: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, S, T>;
    zero<A extends unknown, B extends unknown>(arg0: App2<FunctionType$Mu, A, B>): App2<FunctionType$Mu, A, B>;
    name(): "INSTANCE";
}