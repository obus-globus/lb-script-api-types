import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface GameEventListenerRegistry$ListenerVisitor extends Object{
    visit(listener: GameEventListener, position: Vec3): void;
}