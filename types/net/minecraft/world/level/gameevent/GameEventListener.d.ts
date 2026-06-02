import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { GameEvent } from '../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener$DeliveryMode } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener$DeliveryMode.d.ts'
import type { PositionSource } from '../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface GameEventListener extends Object{
    getDeliveryMode(): GameEventListener$DeliveryMode;
    getListenerRadius(): number;
    getListenerSource(): PositionSource;
    handleGameEvent(level: ServerLevel, event: Holder<GameEvent>, context: GameEvent$Context, sourcePosition: Vec3): boolean;
}