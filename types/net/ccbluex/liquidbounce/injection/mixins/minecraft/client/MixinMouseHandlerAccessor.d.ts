import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MouseHandler$LastClick } from '../../../../../../../net/minecraft/client/MouseHandler$LastClick.d.ts'
export interface MixinMouseHandlerAccessor extends Object{
    setLastClick(arg0: MouseHandler$LastClick): void;
    setLastClickButton(arg0: number): void;
}