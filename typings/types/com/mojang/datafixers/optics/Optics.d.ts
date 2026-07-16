import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { FunctionType$Mu } from '../../../../com/mojang/datafixers/FunctionType$Mu.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Adapter } from '../../../../com/mojang/datafixers/optics/Adapter.d.ts'
import type { Affine } from '../../../../com/mojang/datafixers/optics/Affine.d.ts'
import type { Forget } from '../../../../com/mojang/datafixers/optics/Forget.d.ts'
import type { ForgetE } from '../../../../com/mojang/datafixers/optics/ForgetE.d.ts'
import type { ForgetOpt } from '../../../../com/mojang/datafixers/optics/ForgetOpt.d.ts'
import type { Getter } from '../../../../com/mojang/datafixers/optics/Getter.d.ts'
import type { Grate } from '../../../../com/mojang/datafixers/optics/Grate.d.ts'
import type { Inj1 } from '../../../../com/mojang/datafixers/optics/Inj1.d.ts'
import type { Inj2 } from '../../../../com/mojang/datafixers/optics/Inj2.d.ts'
import type { Lens } from '../../../../com/mojang/datafixers/optics/Lens.d.ts'
import type { ListTraversal } from '../../../../com/mojang/datafixers/optics/ListTraversal.d.ts'
import type { Optic } from '../../../../com/mojang/datafixers/optics/Optic.d.ts'
import type { PStore } from '../../../../com/mojang/datafixers/optics/PStore.d.ts'
import type { Prism } from '../../../../com/mojang/datafixers/optics/Prism.d.ts'
import type { Proj1 } from '../../../../com/mojang/datafixers/optics/Proj1.d.ts'
import type { Proj2 } from '../../../../com/mojang/datafixers/optics/Proj2.d.ts'
import type { ReForget } from '../../../../com/mojang/datafixers/optics/ReForget.d.ts'
import type { ReForgetC } from '../../../../com/mojang/datafixers/optics/ReForgetC.d.ts'
import type { ReForgetE } from '../../../../com/mojang/datafixers/optics/ReForgetE.d.ts'
import type { ReForgetEP } from '../../../../com/mojang/datafixers/optics/ReForgetEP.d.ts'
import type { ReForgetP } from '../../../../com/mojang/datafixers/optics/ReForgetP.d.ts'
import type { Traversal } from '../../../../com/mojang/datafixers/optics/Traversal.d.ts'
import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Pair } from '../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Optics extends Object {
    static adapter<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: S) => A, paramarg1: (param0: B) => T): Adapter<S, T, A, B>;
    static affine<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: S) => Either<T, A>, paramarg1: (param0: B, param1: S) => T): Affine<S, T, A, B>;
    static eitherAffine<F extends unknown, G extends unknown, F2 extends unknown, G2 extends unknown, A extends unknown, B extends unknown>(paramarg0: Affine<F, F2, A, B>, paramarg1: Affine<G, G2, A, B>): Affine<Either<F, G>, Either<F2, G2>, A, B>;
    static eitherLens<F extends unknown, G extends unknown, F2 extends unknown, G2 extends unknown, A extends unknown, B extends unknown>(paramarg0: Lens<F, F2, A, B>, paramarg1: Lens<G, G2, A, B>): Lens<Either<F, G>, Either<F2, G2>, A, B>;
    static eitherTraversal<F extends unknown, G extends unknown, F2 extends unknown, G2 extends unknown, A extends unknown, B extends unknown>(paramarg0: Traversal<F, F2, A, B>, paramarg1: Traversal<G, G2, A, B>): Traversal<Either<F, G>, Either<F2, G2>, A, B>;
    static forget<R extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: A) => R): Forget<R, A, B>;
    static forgetE<R extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: A) => Either<B, R>): ForgetE<R, A, B>;
    static forgetOpt<R extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: A) => Optional<R>): ForgetOpt<R, A, B>;
    static getFunc<A extends unknown, B extends unknown>(paramarg0: App2<FunctionType$Mu, A, B>): (param0: A) => B;
    static getter<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: S) => A): Getter<S, T, A, B>;
    static grate<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: FunctionType<FunctionType<FunctionType<S, A>, B>, T>): Grate<S, T, A, B>;
    static id<S extends unknown, T extends unknown>(): Adapter<S, T, S, T>;
    static inj1<F extends unknown, G extends unknown, F2 extends unknown>(): Inj1<F, G, F2>;
    static inj2<F extends unknown, G extends unknown, G2 extends unknown>(): Inj2<F, G, G2>;
    static isId(paramarg0: Optic<any, Object, Object, Object, Object>): boolean;
    static isInj1(paramarg0: Optic<any, Object, Object, Object, Object>): boolean;
    static isInj2(paramarg0: Optic<any, Object, Object, Object, Object>): boolean;
    static isProj1(paramarg0: Optic<any, Object, Object, Object, Object>): boolean;
    static isProj2(paramarg0: Optic<any, Object, Object, Object, Object>): boolean;
    static lens<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: S) => A, paramarg1: (param0: B, param1: S) => T): Lens<S, T, A, B>;
    static listTraversal<A extends unknown, B extends unknown>(): ListTraversal<A, B>;
    static pStore<I extends unknown, J extends unknown, X extends unknown>(paramarg0: (param0: J) => X, paramarg1: () => I): PStore<I, J, X>;
    static prism<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: S) => Either<T, A>, paramarg1: (param0: B) => T): Prism<S, T, A, B>;
    static proj1<F extends unknown, G extends unknown, F2 extends unknown>(): Proj1<F, G, F2>;
    static proj2<F extends unknown, G extends unknown, G2 extends unknown>(): Proj2<F, G, G2>;
    static reForget<R extends unknown, A extends unknown, B extends unknown>(paramarg0: (param0: R) => B): ReForget<R, A, B>;
    static reForgetC<R extends unknown, A extends unknown, B extends unknown>(paramarg0: string, paramarg1: Either<(param0: R) => B, (param0: A, param1: R) => B>): ReForgetC<R, A, B>;
    static reForgetE<R extends unknown, A extends unknown, B extends unknown>(paramarg0: string, paramarg1: (param0: Either<A, R>) => B): ReForgetE<R, A, B>;
    static reForgetEP<R extends unknown, A extends unknown, B extends unknown>(paramarg0: string, paramarg1: (param0: Either<A, Pair<A, R>>) => B): ReForgetEP<R, A, B>;
    static reForgetP<R extends unknown, A extends unknown, B extends unknown>(paramarg0: string, paramarg1: (param0: A, param1: R) => B): ReForgetP<R, A, B>;
    static toAdapter<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Adapter<S, T, A, B>;
    static toAffine<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Affine<S, T, A, B>;
    static toGetter<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Getter<S, T, A, B>;
    static toLens<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Lens<S, T, A, B>;
    static toPrism<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Prism<S, T, A, B>;
    static toTraversal<S extends unknown, T extends unknown, A extends unknown, B extends unknown>(paramarg0: Optic<any, S, T, A, B>): Traversal<S, T, A, B>;
    constructor()
}