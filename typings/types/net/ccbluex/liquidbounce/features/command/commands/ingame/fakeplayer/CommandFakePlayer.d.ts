import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { FakePlayer } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/FakePlayer.d.ts'
import type { PosPoseSnapshot } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/PosPoseSnapshot.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Fake Player Command
 *
 * Allows you to spawn a client side player for testing purposes.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:61}
 */
export class CommandFakePlayer extends Object implements EventListener, Command$Factory {
    static INSTANCE: CommandFakePlayer;
    // private attackHandler: EventHook<AttackEntityEvent>;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly explosionHandler: EventHook<PacketEvent>;
    // private fakePlayers: FakePlayer[];
    // private recording: boolean;
    readonly running: boolean;
    // private snapshots: PosPoseSnapshot[];
    /**
     * Recordings are made in the tick event handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L347 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:347}
     */
    readonly tickHandler: EventHook<GameTickEvent>;
    // private calculateAttackDamage(fakePlayer: LivingEntity): number;
    // private checkInGame(): void;
    children(): EventListener[];
    // private clearCommand(): Command;
    createCommand(): Command;
    // private endRecordingCommand(): Command;
    parent(): EventListener | null;
    // private removeCommand(): Command;
    // private spawn(args: Object[], moving: boolean): void;
    // private spawnCommand(): Command;
    // private startRecordingCommand(): Command;
    // private stopRecording(): void;
    unregister(): void;
}