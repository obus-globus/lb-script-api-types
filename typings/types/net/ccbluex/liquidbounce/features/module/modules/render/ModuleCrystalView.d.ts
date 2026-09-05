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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCrystalView.kt:35}
 */
export class ModuleCrystalView extends ClientModule {
    static INSTANCE: ModuleCrystalView;
    readonly bounce: number;
    readonly size: number;
    readonly spinSpeed: number;
    // private yTranslate: number;
    /*not mapped: */ getYTranslate(): number;
}