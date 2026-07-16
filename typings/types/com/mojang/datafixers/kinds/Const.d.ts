import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { Const$Mu } from '../../../../com/mojang/datafixers/kinds/Const$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Const<C extends unknown, T extends unknown> extends Object implements App<Const$Mu<C>, T> {
    static create<C extends unknown, T extends unknown>(paramarg0: C): Const<C, T>;
    static unbox<C extends unknown, T extends unknown>(paramarg0: App<Const$Mu<C>, T>): C;
    constructor(arg0: C)
    // private value: C;
}