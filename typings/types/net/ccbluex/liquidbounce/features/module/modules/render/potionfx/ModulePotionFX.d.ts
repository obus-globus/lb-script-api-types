import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { DynamicTexture } from '../../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class ModulePotionFX extends ClientModule {
    static INSTANCE: ModulePotionFX;
    readonly glow: DynamicTexture;
}