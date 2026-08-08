import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * A rotation manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt:35}
 */
export class CombatManager extends Object implements EventListener {
    static INSTANCE: CombatManager;
    static PAUSE_COMBAT: number;
    PAUSE_COMBAT: number;
    readonly attackHandler: EventHook<AttackEntityEvent>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    duringCombat: number;
    /*not mapped: */ isInCombat(): boolean;
    // private pauseBlocking: number;
    // private pauseCombat: number;
    // private pauseRotation: number;
    readonly running: boolean;
    readonly shouldPauseBlocking: boolean;
    readonly shouldPauseCombat: boolean;
    readonly shouldPauseRotation: boolean;
    readonly tickHandler: EventHook<GameTickEvent>;
    children(): EventListener[];
    parent(): EventListener | null;
    pauseBlockingForAtLeast(pauseTime: number): void;
    pauseCombatForAtLeast(pauseTime: number): void;
    pauseRotationForAtLeast(pauseTime: number): void;
    unregister(): void;
    /**
     * Update current rotation to new rotation step
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt:76}
     */
    update(): void;
    // private updateDuringCombat(): void;
    // private updatePauseBlocking(): void;
    // private updatePauseCombat(): void;
    // private updatePauseRotation(): void;
}