import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSlowBreak$When } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak$When.d.ts'
/**
 * NoSlowBreak module
 *
 * Automatically adjusts breaking speed when in negatively affecting situations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleNoSlowBreak.kt:30}
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