import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Const$Mu } from '../../../../com/mojang/datafixers/kinds/Const$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Const<C extends unknown, T extends unknown> extends Object implements App<Const$Mu<C>, T> {
    static create(paramarg0: Object | null): Const<Object, Object>;
    static unbox(paramarg0: App<Const$Mu<Object>, Object>): Object | null;
    constructor(arg0: C)
    // private value: C;
}