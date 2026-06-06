import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * A rotation manager
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt:32}
 */
export class CombatManager extends Object implements EventListener {
    static INSTANCE: CombatManager;
    static PAUSE_COMBAT: number;
    PAUSE_COMBAT: number;
    readonly attackHandler: EventHook<AttackEntityEvent>;
    duringCombat: number;
    /*not mapped: */ isInCombat(): boolean;
    // private pauseBlocking: number;
    // private pauseCombat: number;
    // private pauseRotation: number;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatManager.kt:73}
     */
    update(): void;
    // private updateDuringCombat(): void;
    // private updatePauseBlocking(): void;
    // private updatePauseCombat(): void;
    // private updatePauseRotation(): void;
}