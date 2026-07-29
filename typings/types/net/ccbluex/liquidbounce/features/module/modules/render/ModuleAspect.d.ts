import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Aspect ratio changer
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt:30}
 */
export class ModuleAspect extends ClientModule {
    static INSTANCE: ModuleAspect;
    static getRatioMultiplier(): number;
    /*not mapped: */ getRatioMultiplier(): number;
    // private ratioPercentage: number;
    // private /*not mapped: */ getRatioPercentage(): number;
}