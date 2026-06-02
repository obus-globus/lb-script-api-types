import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClickEvent$Action } from '../../../../net/minecraft/network/chat/ClickEvent$Action.d.ts'
export interface ClickEvent extends Object{
    action(): ClickEvent$Action;
}