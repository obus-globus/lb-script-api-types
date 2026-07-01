import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleEntityControl$Enforce } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl$Enforce.d.ts'
/**
 * Entity Control module
 *
 * Control rideable entities without a saddle
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleEntityControl.kt:30}
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