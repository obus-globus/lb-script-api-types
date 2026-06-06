import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
/**
 * Can be implemented to handle actions after crystals got attacked.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:34}
 */
export abstract class CrystalPostAttackTracker extends Object implements EventListener {
    constructor()
    // private attackedIds: Int2LongMap;
    // private /*not mapped: */ getAttackedIds(): Int2LongMap;
    // private explodeListener: EventHook<PacketEvent>;
    // private repeatable: EventHook<GameTickEvent>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    /**
     * Show be called when the crystal aura attacks.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L110 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:110}
     */
    attacked(id: number): void;
    children(): EventListener[];
    /**
     * Gets called when the attacked id list gets cleared.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:105}
     */
    cleared(): void;
    /**
     * Gets called when we are sure the crystal got destroyed.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:91}
     */
    confirmed(id: number): void;
    onToggle(): void;
    parent(): EventListener | null;
    /**
     * After how many ms attacks are not tracked anymore.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L123 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:123}
     */
    timeOutAfter(): number;
    /**
     * Gets called when the crystal was not confirmed in the time defined by {@link timeOutAfter} in ms.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:98}
     */
    timedOut(id: number): void;
    unregister(): void;
}