import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { TagEntityEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TagEntityEvent.d.ts'
import type { FriendManager$Friend } from '../../../../../net/ccbluex/liquidbounce/features/misc/FriendManager$Friend.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class FriendManager extends Config implements EventListener {
    static INSTANCE: FriendManager;
    // private cancelAttack: boolean;
    // private /*not mapped: */ getCancelAttack(): boolean;
    readonly debugDisplayName: Component;
    readonly friends: FriendManager$Friend[];
    // private onAttack: EventHook<AttackEntityEvent>;
    readonly running: boolean;
    // private tagEntityEvent: EventHook<TagEntityEvent>;
    children(): EventListener[];
    isFriend(name: string): boolean;
    isFriend(entity: Entity): boolean;
    parent(): EventListener | null;
    unregister(): void;
}