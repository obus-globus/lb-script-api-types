import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Aspect ratio changer
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt:30}
 */
export class ModuleAspect extends ClientModule {
    static INSTANCE: ModuleAspect;
    static getRatioMultiplier(): number;
    /*not mapped: */ getRatioMultiplier(): number;
    // private ratioPercentage: number;
    // private /*not mapped: */ getRatioPercentage(): number;
}