import type { FunctionType } from '../../../../com/mojang/datafixers/FunctionType.d.ts'
import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Adapter } from '../../../../com/mojang/datafixers/optics/Adapter.d.ts'
import type { Profunctor$Mu } from '../../../../com/mojang/datafixers/optics/profunctors/Profunctor$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IdAdapter<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object implements Adapter<S, T, S, T> {
    static unbox(paramarg0: App2<Object, Object, Object>): Adapter<Object, Object, Object, Object>;
    private constructor()
    eval(arg0: App<Profunctor$Mu, P>): FunctionType<App2<P, A, B>, App2<P, S, T>>;
    from(arg0: S): S;
    to(arg0: T): T;
    toString(): string;
}