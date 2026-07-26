import type { AtomicInt } from '../../../../../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFlagCheck$AlertReason } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModuleFlagCheck$AlertReason.d.ts'
/**
 * Module Flag Check.
 *
 * Alerts you about set backs.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleFlagCheck.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleFlagCheck.kt:50}
 */
export class ModuleFlagCheck extends ClientModule {
    static INSTANCE: ModuleFlagCheck;
    // private chatMessage: boolean;
    // private /*not mapped: */ getChatMessage(): boolean;
    // private flagCount: AtomicInt;
    // private invalidAttributes: boolean;
    // private /*not mapped: */ getInvalidAttributes(): boolean;
    // private lastPitch: number;
    // private lastYaw: number;
    // private notification: boolean;
    // private /*not mapped: */ getNotification(): boolean;
    // private packetHandler: EventHook<PacketEvent>;
    // private repeatable: EventHook<GameTickEvent>;
    // private alert(reason: ModuleFlagCheck$AlertReason, extra: string | null): void;
    // private calculateAngleDelta(newAngle: number, oldAngle: number): number;
}