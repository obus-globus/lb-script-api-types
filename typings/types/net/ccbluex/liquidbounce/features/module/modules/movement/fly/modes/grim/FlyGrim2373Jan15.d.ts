import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
/**
 * @remarks
 * - **Anticheat:** Grim (2.3.73-b7a719d
  https://modrinth.com/plugin/grimac/version/Eq05CMZ9
  January 15, 2026)
 * - **Tested on:** test.ccbluex.net
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/grim/FlyGrim2373Jan15.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/fly/modes/grim/FlyGrim2373Jan15.kt:36}
 */
export class FlyGrim2373Jan15 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyGrim2373Jan15;
    // private airTick: number;
    // private /*not mapped: */ getAirTick(): number;
    // private autoLag: boolean;
    // private /*not mapped: */ getAutoLag(): boolean;
    // private isStarted: boolean;
    // private motionHandler: EventHook<PlayerNetworkMovementTickEvent>;
    readonly parent: ModeValueGroup<any>;
    // private queuePacketHandler: EventHook<BlinkPacketEvent>;
    // private shouldDelay: boolean;
    disable(): void;
    // private sendFallFlying(): void;
}