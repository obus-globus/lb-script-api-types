import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { InteractionTracker$Interaction } from '../../../../../net/ccbluex/liquidbounce/utils/client/InteractionTracker$Interaction.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
export class InteractionTracker extends Object implements EventListener {
    static INSTANCE: InteractionTracker;
    readonly blockingHand: InteractionHand | null;
    readonly currentInteraction: InteractionTracker$Interaction | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private doNotHandle: boolean;
    /*not mapped: */ isBlocking(): boolean;
    /*not mapped: */ isMainHand(): boolean;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    unregister(): void;
    untracked(block: () => void): void;
}