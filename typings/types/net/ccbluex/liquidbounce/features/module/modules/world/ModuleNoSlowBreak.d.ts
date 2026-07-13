import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSlowBreak$When } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak$When.d.ts'
/**
 * NoSlowBreak module
 *
 * Automatically adjusts breaking speed when in negatively affecting situations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak.kt:30}
 */
export class ModuleNoSlowBreak extends ClientModule {
    static INSTANCE: ModuleNoSlowBreak;
    static getMiningFatigue(): boolean;
    static getOnAir(): boolean;
    static getWater(): boolean;
    /*not mapped: */ getMiningFatigue(): boolean;
    /*not mapped: */ getOnAir(): boolean;
    /*not mapped: */ getWater(): boolean;
    // private when: ModuleNoSlowBreak$When[];
    // private /*not mapped: */ getWhen(): ModuleNoSlowBreak$When[];
}