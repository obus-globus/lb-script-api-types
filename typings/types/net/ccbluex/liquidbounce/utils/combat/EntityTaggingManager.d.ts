import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { EntityTag } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTag.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityTaggingManager extends Object implements EventListener {
    static INSTANCE: EntityTaggingManager;
    // private cache: Map<Entity, EntityTag>;
    readonly debugDisplayName: Component;
    readonly running: boolean;
    readonly tickHandler: EventHook<GameTickEvent>;
    children(): EventListener[];
    getTag(suspect: Entity): EntityTag;
    parent(): EventListener | null;
    unregister(): void;
}