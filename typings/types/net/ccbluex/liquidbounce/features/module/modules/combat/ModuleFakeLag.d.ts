import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleFakeLag$FlushOn } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleFakeLag$FlushOn.d.ts'
import type { ModuleFakeLag$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleFakeLag$Mode.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
/**
 * FakeLag module
 *
 * Holds back packets to prevent you from being hit by an enemy.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleFakeLag.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleFakeLag.kt:62}
 */
export class ModuleFakeLag extends ClientModule {
    static INSTANCE: ModuleFakeLag;
    // private chronometer: Chronometer;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private flushOn: ModuleFakeLag$FlushOn[];
    // private /*not mapped: */ getFlushOn(): ModuleFakeLag$FlushOn[];
    // private gameTickHandler: EventHook<GameTickEvent>;
    // private isEnemyNearby: boolean;
    // private mode: ModuleFakeLag$Mode;
    // private /*not mapped: */ getMode(): ModuleFakeLag$Mode;
    // private nextDelay: number;
    // private range: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRange(): ClosedFloatingPointRange<number>;
    // private recoilTime: number;
    // private /*not mapped: */ getRecoilTime(): number;
    onDisabled(): void;
}