import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSpeed$NotCondition } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed$NotCondition.d.ts'
/**
 * Speed module
 *
 * Allows you to move faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt:64}
 */
export class ModuleSpeed extends ClientModule {
    static INSTANCE: ModuleSpeed;
    // private avoidEdgeBump: boolean;
    // private /*not mapped: */ getAvoidEdgeBump(): boolean;
    readonly modes: ModeValueGroup<Mode>;
    getModes(): ModeValueGroup<Mode>;
    // private notCondition: ModuleSpeed$NotCondition[];
    // private /*not mapped: */ getNotCondition(): ModuleSpeed$NotCondition[];
    readonly running: boolean;
    doOptimizationsPreventJump(): boolean;
    // private initializeSpeeds(modeValueGroup: ModeValueGroup<any>): Mode[];
    // private passesRequirements(): boolean;
}