import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { EuclideanGameEventListenerRegistry$OnEmptyAction } from '../../../../../net/minecraft/world/level/gameevent/EuclideanGameEventListenerRegistry$OnEmptyAction.d.ts'
import type { GameEvent } from '../../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { GameEvent$Context } from '../../../../../net/minecraft/world/level/gameevent/GameEvent$Context.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
import type { GameEventListenerRegistry } from '../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry.d.ts'
import type { GameEventListenerRegistry$ListenerVisitor } from '../../../../../net/minecraft/world/level/gameevent/GameEventListenerRegistry$ListenerVisitor.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EuclideanGameEventListenerRegistry extends Object implements GameEventListenerRegistry {
    static NOOP: GameEventListenerRegistry;
    constructor(level: ServerLevel, sectionY: number, onEmptyAction: (param0: number) => void)
    // private level: ServerLevel;
    // private listeners: GameEventListener[];
    // private listenersToAdd: GameEventListener[];
    // private listenersToRemove: GameEventListener[];
    // private onEmptyAction: (param0: number) => void;
    // private processing: boolean;
    // private sectionY: number;
    isEmpty(): boolean;
    register(listener: GameEventListener): void;
    unregister(listener: GameEventListener): void;
    visitInRangeListeners(event: Holder<GameEvent>, sourcePosition: Vec3, context: GameEvent$Context, action: (param0: GameEventListener, param1: Vec3) => void): boolean;
}