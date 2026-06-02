import type { App } from '../../../../com/mojang/datafixers/kinds/App.d.ts'
import type { PStore$Mu } from '../../../../com/mojang/datafixers/optics/PStore$Mu.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PStore<I extends Object | number | string | boolean, J extends Object | number | string | boolean, X extends Object | number | string | boolean> extends App<PStore$Mu<I, J>, X>, Object{
    peek(arg0: J): X;
    pos(): I;
}