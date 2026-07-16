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
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Fake Player Command
 *
 * Allows you to spawn a client side player for testing purposes.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:60}
 */
export class CommandFakePlayer extends Object implements EventListener, Command$Factory {
    static INSTANCE: CommandFakePlayer;
    // private attackHandler: EventHook<AttackEntityEvent>;
    readonly explosionHandler: EventHook<PacketEvent>;
    // private fakePlayerId: number;
    // private fakePlayers: FakePlayer[];
    // private recording: boolean;
    // private snapshots: PosPoseSnapshot[];
    /**
     * Recordings are made in the tick event handler.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt#L350 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/fakeplayer/CommandFakePlayer.kt:350}
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