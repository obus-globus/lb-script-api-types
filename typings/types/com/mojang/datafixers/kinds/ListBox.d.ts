import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { ListBox$Mu } from '../../../../com/mojang/datafixers/kinds/ListBox$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListBox<T extends unknown> extends Object implements App<ListBox$Mu, T> {
    static create<T extends unknown>(paramarg0: T[]): ListBox<T>;
    static flip<F extends K1, A extends unknown>(paramarg0: Applicative<F, any>, paramarg1: App<F, A>[]): App<F, A[]>;
    static traverse<F extends K1, A extends unknown, B extends unknown>(paramarg0: Applicative<F, any>, paramarg1: (param0: A) => App<F, B>, paramarg2: A[]): App<F, B[]>;
    static unbox<T extends unknown>(paramarg0: App<ListBox$Mu, T>): T[];
    private constructor(arg0: T[])
    // private value: T[];
}