import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { K1 } from '../../../../com/mojang/datafixers/kinds/K1.d.ts'
import type { ListBox$Mu } from '../../../../com/mojang/datafixers/kinds/ListBox$Mu.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ListBox<T extends Object | number | string | boolean> extends Object implements App<ListBox$Mu, T> {
    static create(paramarg0: (Object | null)[]): ListBox<Object>;
    static flip(paramarg0: Applicative<K1, Object>, paramarg1: App<K1, Object>[]): App<K1, (Object | null)[]>;
    static traverse(paramarg0: Applicative<K1, Object>, paramarg1: (param0: Object | null) => App<K1, Object>, paramarg2: (Object | null)[]): App<K1, (Object | null)[]>;
    static unbox(paramarg0: App<ListBox$Mu, Object>): (Object | null)[];
    private constructor(arg0: T[])
    // private value: T[];
}