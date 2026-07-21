import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoFall$NotCondition } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall$NotCondition.d.ts'
import type { NoFallMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * NoFall module
 *
 * Protects you from taking fall damage.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/ModuleNoFall.kt:52}
 */
export class ModuleNoFall extends ClientModule {
    static INSTANCE: ModuleNoFall;
    // private modes: ModeValueGroup<NoFallMode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<NoFallMode>;
    // private notConditions: ModuleNoFall$NotCondition[];
    // private /*not mapped: */ getNotConditions(): ModuleNoFall$NotCondition[];
    readonly running: boolean;
}