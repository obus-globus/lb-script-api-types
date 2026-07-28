import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Module CrystalView
 *
 * Tweaks how crystal models behave.
 *
 * Mixins: {@link MixinEndCrystalModel}, {@link MixinEndCrystalRenderer}
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt:35}
 */
export class ModuleCrystalView extends ClientModule {
    static INSTANCE: ModuleCrystalView;
    readonly bounce: number;
    readonly size: number;
    readonly spinSpeed: number;
    // private yTranslate: number;
    /*not mapped: */ getYTranslate(): number;
}