import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleEntityControl$Enforce } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl$Enforce.d.ts'
/**
 * Entity Control module
 *
 * Control rideable entities without a saddle
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt:30}
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