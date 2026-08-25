import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { CrystalPostAttackTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.d.ts'
/**
 * Counts how many crystals the crystal aura places.
 * "CPS" stands for crystals per second.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalAuraSpeedDebugger.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalAuraSpeedDebugger.kt:31}
 */
export class CrystalAuraSpeedDebugger extends CrystalPostAttackTracker {
    static INSTANCE: CrystalAuraSpeedDebugger;
    // private cps: number[];
    readonly running: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    cleared(): void;
    confirmed(id: number): void;
}