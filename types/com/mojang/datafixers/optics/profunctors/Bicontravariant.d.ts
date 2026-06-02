import type { FunctionType } from '../../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App2 } from '../../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { K2 } from '../../../../../com/mojang/datafixers/kinds/K2.d.ts'
import type { Kind2 } from '../../../../../com/mojang/datafixers/kinds/Kind2.d.ts'
import type { Bicontravariant$Mu } from '../../../../../com/mojang/datafixers/optics/profunctors/Bicontravariant$Mu.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Bicontravariant<P extends K2, Mu extends Bicontravariant$Mu> extends Kind2<P, Mu>, Object{
    cimap(arg0: (param0: C) => A, arg1: (param0: D) => B): FunctionType<() => App2<P, A, B>, App2<P, C, D>>;
    cimap(arg0: () => App2<P, A, B>, arg1: (param0: C) => A, arg2: (param0: D) => B): App2<P, C, D>;
}