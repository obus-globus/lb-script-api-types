import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { Component } from '../../../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Can be implemented to handle actions after crystals got attacked.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:37}
 */
export abstract class CrystalPostAttackTracker extends Object implements EventListener {
    constructor()
    // private attackedIds: JavaMap<any, any>;
    // private /*not mapped: */ getAttackedIds(): JavaMap<any, any>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private explodeListener: EventHook<PacketEvent>;
    // private repeatable: EventHook<GameTickEvent>;
    readonly running: boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    /**
     * Show be called when the crystal aura attacks.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:115}
     */
    attacked(id: number): void;
    children(): EventListener[];
    /**
     * Gets called when the attacked id list gets cleared.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:108}
     */
    cleared(): void;
    /**
     * Gets called when we are sure the crystal got destroyed.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:96}
     */
    confirmed(id: number): void;
    onToggle(): void;
    parent(): EventListener | null;
    /**
     * After how many ms attacks are not tracked anymore.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:126}
     */
    timeOutAfter(): number;
    /**
     * Gets called when the crystal was not confirmed in the time defined by {@link timeOutAfter} in ms.
     *
     * @param id The id of the attacked entity.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt#L103 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.kt:103}
     */
    timedOut(id: number): void;
    unregister(): void;
}