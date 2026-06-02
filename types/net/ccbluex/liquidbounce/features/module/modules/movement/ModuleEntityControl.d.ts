import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleEntityControl$Enforce } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl$Enforce.d.ts'
/**
 * Entity Control module
 *
 * Control rideable entities without a saddle
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt:25}
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