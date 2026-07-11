import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleSpeed$NotCondition } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed$NotCondition.d.ts'
/**
 * Speed module
 *
 * Allows you to move faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/ModuleSpeed.kt:64}
 */
export class ModuleSpeed extends ClientModule {
    static INSTANCE: ModuleSpeed;
    // private avoidEdgeBump: boolean;
    // private /*not mapped: */ getAvoidEdgeBump(): boolean;
    readonly modes: ModeValueGroup<Mode>;
    // private notCondition: ModuleSpeed$NotCondition[];
    // private /*not mapped: */ getNotCondition(): ModuleSpeed$NotCondition[];
    readonly running: boolean;
    doOptimizationsPreventJump(): boolean;
    // private initializeSpeeds(modeValueGroup: ModeValueGroup<any>): Mode[];
    // private passesRequirements(): boolean;
}