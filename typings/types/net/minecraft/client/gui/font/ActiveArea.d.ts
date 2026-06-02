import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export interface ActiveArea extends Object{
    activeBottom(): number;
    activeLeft(): number;
    activeRight(): number;
    activeTop(): number;
    style(): Style;
}