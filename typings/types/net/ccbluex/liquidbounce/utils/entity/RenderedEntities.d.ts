import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PerspectiveEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * A readonly {@link Collection} containing all {@link LivingEntity} instances that meet the {@link shouldBeShown} condition.
 *
 * This collection will be auto updated on {@link GameTickEvent},
 * and be cleared on {@link WorldChangeEvent} or at the unsubscription of last {@link EventListener}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/RenderedEntities.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/RenderedEntities.kt:45}
 */
export class RenderedEntities extends Object implements EventListener {
    static INSTANCE: RenderedEntities;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private onUpdate: Pair<EventListener, () => void>[];
    // private perspectiveChangeHandler: EventHook<PerspectiveEvent>;
    // private registry: EventListener[];
    readonly running: boolean;
    readonly size: number;
    getSize(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private worldHandler: EventHook<WorldChangeEvent>;
    children(): EventListener[];
    contains(element: LivingEntity): boolean;
    containsAll(elements: LivingEntity[]): boolean;
    isEmpty(): boolean;
    iterator(): Iterator<LivingEntity>;
    onUpdated(listener: EventListener, callback: () => void): void;
    parent(): EventListener | null;
    // private refresh(): void;
    subscribe(subscriber: EventListener): void;
    unregister(): void;
    unsubscribe(subscriber: EventListener): void;
    // private update(): void;
}