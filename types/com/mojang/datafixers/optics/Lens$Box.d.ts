import type { App2 } from '../../../../com/mojang/datafixers/kinds/App2.d.ts'
import type { Lens } from '../../../../com/mojang/datafixers/optics/Lens.d.ts'
import type { Lens$Mu2 } from '../../../../com/mojang/datafixers/optics/Lens$Mu2.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Lens$Box<S extends Object | number | string | boolean, T extends Object | number | string | boolean, A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements App2<Lens$Mu2<S, T>, B, A> {
    constructor(arg0: Lens<S, T, A, B>)
    // private lens: Lens<S, T, A, B>;
}