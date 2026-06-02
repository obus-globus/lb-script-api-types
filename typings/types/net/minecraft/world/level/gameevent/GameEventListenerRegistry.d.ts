import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { GameEvent } from '../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { GameEventListenerRegistry$ListenerVisitor } from '../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry$ListenerVisitor.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface GameEventListenerRegistry extends Object{
    isEmpty(): boolean;
    register(listener: GameEventListener): void;
    unregister(listener: GameEventListener): void;
    visitInRangeListeners(event: Holder<GameEvent>, sourcePosition: Vec3, context: GameEvent$Context, action: (param0: GameEventListener, param1: Vec3) => void): boolean;
}