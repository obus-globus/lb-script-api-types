import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { GameEvent } from '../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GameEvent$ListenerInfo extends Object implements Comparable<GameEvent$ListenerInfo> {
    constructor(gameEvent: Holder<GameEvent>, source: Vec3, context: GameEvent$Context, recipient: GameEventListener, recipientPos: Vec3)
    // private context: GameEvent$Context;
    // private distanceToRecipient: number;
    // private gameEvent: Holder<GameEvent>;
    // private recipient: GameEventListener;
    // private source: Vec3;
    compareTo(other: GameEvent$ListenerInfo): number;
    context(): GameEvent$Context;
    gameEvent(): Holder<GameEvent>;
    recipient(): GameEventListener;
    source(): Vec3;
}