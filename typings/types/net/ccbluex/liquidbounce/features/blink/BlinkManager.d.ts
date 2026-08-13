import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderTaskQueueEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/GameRenderTaskQueueEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TickPacketProcessEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { TransferOrigin } from '../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { BlinkManager$Action } from '../../../../../net/ccbluex/liquidbounce/features/blink/BlinkManager$Action.d.ts'
import type { PacketSnapshot } from '../../../../../net/ccbluex/liquidbounce/features/blink/PacketSnapshot.d.ts'
import type { BlinkEspData } from '../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspData.d.ts'
import type { BlinkEspMode } from '../../../../../net/ccbluex/liquidbounce/features/blink/esp/BlinkEspMode.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Allows queueing packets and flush them later on demand.
 *
 * Fires {@link BlinkPacketEvent} to determine whether a packet should be queued or not. They can be
 * from origin {@link TransferOrigin.INCOMING} or {@link TransferOrigin.OUTGOING}, but will be handled separately.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/blink/BlinkManager.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/blink/BlinkManager.kt:77}
 */
export class BlinkManager extends ValueGroup implements EventListener {
    static INSTANCE: BlinkManager;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private espMode: ModeValueGroup<BlinkEspMode>;
    // private flushHandler: EventHook<GameRenderTaskQueueEvent>;
    // private flushReceiveHandler: EventHook<TickPacketProcessEvent>;
    /*not mapped: */ isLagging(): boolean;
    // private lineColor: Color4b;
    // private /*not mapped: */ getLineColor(): Color4b;
    // private packetHandler: EventHook<PacketEvent>;
    readonly packetQueue: PacketSnapshot[];
    readonly positions: Vec3[];
    // private renderHandler: EventHook<WorldRenderEvent>;
    readonly running: boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    cancel(): void;
    children(): EventListener[];
    // private fireEvent(packet: Packet<any> | null, origin: TransferOrigin): BlinkManager$Action;
    flush(flushWhen: (param0: PacketSnapshot) => boolean): void;
    flush(count: number): void;
    flush(origin: TransferOrigin): void;
    // private flushSnapshot(snapshot: PacketSnapshot): void;
    // private getEspData(): BlinkEspData | null;
    isAboveTime(delay: number): boolean;
    parent(): EventListener | null;
    rewrite<T extends unknown>(action: (param0: T) => void): void;
    unregister(): void;
}