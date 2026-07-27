import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Aspect ratio changer
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAspect.kt:30}
 */
export class ModuleAspect extends ClientModule {
    static INSTANCE: ModuleAspect;
    static getRatioMultiplier(): number;
    /*not mapped: */ getRatioMultiplier(): number;
    // private ratioPercentage: number;
    // private /*not mapped: */ getRatioPercentage(): number;
}