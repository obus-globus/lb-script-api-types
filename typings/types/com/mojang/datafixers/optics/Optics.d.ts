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
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Optics extends Object {
    static adapter(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => Object | null): Adapter<Object, Object, Object, Object>;
    static affine(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Affine<Object, Object, Object, Object>;
    static eitherAffine(paramarg0: Affine<Object, Object, Object, Object>, paramarg1: Affine<Object, Object, Object, Object>): Affine<Object, Object, Object, Object>;
    static eitherLens(paramarg0: Lens<Object, Object, Object, Object>, paramarg1: Lens<Object, Object, Object, Object>): Lens<Object, Object, Object, Object>;
    static eitherTraversal(paramarg0: Traversal<Object, Object, Object, Object>, paramarg1: Traversal<Object, Object, Object, Object>): Traversal<Object, Object, Object, Object>;
    static forget(paramarg0: (param0: Object | null) => Object | null): Forget<Object, Object, Object>;
    static forgetE(paramarg0: (param0: Object | null) => Object | null): ForgetE<Object, Object, Object>;
    static forgetOpt(paramarg0: (param0: Object | null) => Object | null): ForgetOpt<Object, Object, Object>;
    static getFunc(paramarg0: App2<FunctionType$Mu, Object, Object>): (param0: Object | null) => Object | null;
    static getter(paramarg0: (param0: Object | null) => Object | null): Getter<Object, Object, Object, Object>;
    static grate(paramarg0: FunctionType<Object, Object>): Grate<Object, Object, Object, Object>;
    static id(): Adapter<Object, Object, Object, Object>;
    static inj1(): Inj1<Object, Object, Object>;
    static inj2(): Inj2<Object, Object, Object>;
    static isId(paramarg0: Optic<Object, Object, Object, Object, Object>): boolean;
    static isInj1(paramarg0: Optic<Object, Object, Object, Object, Object>): boolean;
    static isInj2(paramarg0: Optic<Object, Object, Object, Object, Object>): boolean;
    static isProj1(paramarg0: Optic<Object, Object, Object, Object, Object>): boolean;
    static isProj2(paramarg0: Optic<Object, Object, Object, Object, Object>): boolean;
    static lens(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): Lens<Object, Object, Object, Object>;
    static listTraversal(): ListTraversal<Object, Object>;
    static pStore(paramarg0: (param0: Object | null) => Object | null, paramarg1: () => Object | null): PStore<Object, Object, Object>;
    static prism(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => Object | null): Prism<Object, Object, Object, Object>;
    static proj1(): Proj1<Object, Object, Object>;
    static proj2(): Proj2<Object, Object, Object>;
    static reForget(paramarg0: (param0: Object | null) => Object | null): ReForget<Object, Object, Object>;
    static reForgetC(paramarg0: string, paramarg1: Either<Object, Object>): ReForgetC<Object, Object, Object>;
    static reForgetE(paramarg0: string, paramarg1: (param0: Object | null) => Object | null): ReForgetE<Object, Object, Object>;
    static reForgetEP(paramarg0: string, paramarg1: (param0: Object | null) => Object | null): ReForgetEP<Object, Object, Object>;
    static reForgetP(paramarg0: string, paramarg1: (param0: Object | null, param1: Object | null) => Object | null): ReForgetP<Object, Object, Object>;
    static toAdapter(paramarg0: Optic<Object, Object, Object, Object, Object>): Adapter<Object, Object, Object, Object>;
    static toAffine(paramarg0: Optic<Object, Object, Object, Object, Object>): Affine<Object, Object, Object, Object>;
    static toGetter(paramarg0: Optic<Object, Object, Object, Object, Object>): Getter<Object, Object, Object, Object>;
    static toLens(paramarg0: Optic<Object, Object, Object, Object, Object>): Lens<Object, Object, Object, Object>;
    static toPrism(paramarg0: Optic<Object, Object, Object, Object, Object>): Prism<Object, Object, Object, Object>;
    static toTraversal(paramarg0: Optic<Object, Object, Object, Object, Object>): Traversal<Object, Object, Object, Object>;
    constructor()
}