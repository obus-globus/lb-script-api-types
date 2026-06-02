import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HoverEvent$Action } from '../../../../net/minecraft/network/chat/HoverEvent$Action.d.ts'
export interface HoverEvent extends Object{
    action(): HoverEvent$Action;
}