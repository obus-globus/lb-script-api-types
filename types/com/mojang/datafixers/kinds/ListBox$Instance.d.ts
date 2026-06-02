import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Applicative } from '../../../../com/mojang/datafixers/kinds/Applicative.d.ts'
import type { ListBox$Instance$Mu } from '../../../../com/mojang/datafixers/kinds/ListBox$Instance$Mu.d.ts'
import type { ListBox$Mu } from '../../../../com/mojang/datafixers/kinds/ListBox$Mu.d.ts'
import type { Traversable } from '../../../../com/mojang/datafixers/kinds/Traversable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ListBox$Instance extends Enum<ListBox$Instance> implements Traversable<ListBox$Mu, ListBox$Instance$Mu> {
    static INSTANCE: ListBox$Instance;
    static unbox(paramarg0: App<Object, Object>): Traversable<Object, Object>;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ListBox$Instance;
    static values(): (Object | null)[];
    private constructor()
    flip(arg0: Applicative<F, Object>, arg1: App<T, App<F, A>>): App<F, App<T, A>>;
    map(arg0: (param0: T) => R, arg1: App<ListBox$Mu, T>): App<ListBox$Mu, R>;
    traverse(arg0: Applicative<F, Object>, arg1: (param0: A) => App<F, B>, arg2: App<ListBox$Mu, A>): App<F, App<ListBox$Mu, B>>;
    name(): "INSTANCE";
}