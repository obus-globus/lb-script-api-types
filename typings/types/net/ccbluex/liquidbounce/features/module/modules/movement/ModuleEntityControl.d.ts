import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleEntityControl$Enforce } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl$Enforce.d.ts'
/**
 * Entity Control module
 *
 * Control rideable entities without a saddle
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt:30}
 */
export class ModuleEntityControl extends ClientModule {
    static INSTANCE: ModuleEntityControl;
    static getEnforceJumpStrength(): boolean;
    static getEnforceSaddled(): boolean;
    // private enforce: ModuleEntityControl$Enforce[];
    // private /*not mapped: */ getEnforce(): ModuleEntityControl$Enforce[];
    /*not mapped: */ getEnforceJumpStrength(): boolean;
    /*not mapped: */ getEnforceSaddled(): boolean;
}