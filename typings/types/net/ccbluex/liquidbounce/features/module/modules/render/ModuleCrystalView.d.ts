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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt:35}
 */
export class ModuleCrystalView extends ClientModule {
    static INSTANCE: ModuleCrystalView;
    readonly bounce: number;
    readonly size: number;
    readonly spinSpeed: number;
    // private yTranslate: number;
    /*not mapped: */ getYTranslate(): number;
}