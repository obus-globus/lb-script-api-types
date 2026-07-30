import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { CrystalPostAttackTracker } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalPostAttackTracker.d.ts'
/**
 * Counts how many crystals the crystal aura places.
 * "CPS" stands for crystals per second.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalAuraSpeedDebugger.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/post/CrystalAuraSpeedDebugger.kt:31}
 */
export class CrystalAuraSpeedDebugger extends CrystalPostAttackTracker {
    static INSTANCE: CrystalAuraSpeedDebugger;
    // private cps: number[];
    readonly running: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    cleared(): void;
    confirmed(id: number): void;
}