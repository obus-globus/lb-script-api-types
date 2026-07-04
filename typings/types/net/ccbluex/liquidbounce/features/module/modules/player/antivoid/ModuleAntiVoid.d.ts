import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { AntiVoidMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * AntiVoid module protects the player from falling into the void by simulating
 * future movements and taking action if necessary.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/ModuleAntiVoid.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/ModuleAntiVoid.kt:42}
 */
export class ModuleAntiVoid extends ClientModule {
    static INSTANCE: ModuleAntiVoid;
    // private SAFE_TICKS_THRESHOLD: number;
    // private isLikelyFalling: boolean;
    /*not mapped: */ isLikelyFalling(): boolean;
    readonly mode: ModeValueGroup<AntiVoidMode>;
    readonly rescuePosition: Vec3 | null;
    // private voidHandler: EventHook<GameTickEvent>;
    // private voidThreshold: number;
    // private /*not mapped: */ getVoidThreshold(): number;
    // private isPredictingFall(): boolean;
    isSafeForRescue(pos: Vec3): boolean;
    onEnabled(): void;
}