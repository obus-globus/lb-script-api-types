import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
export interface GameEventListener$Provider<T extends GameEventListener> extends Object{
    getListener(): T;
}