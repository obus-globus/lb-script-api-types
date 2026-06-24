import type { DepthStencilState } from '../../../../../../../com/mojang/blaze3d/pipeline/DepthStencilState.d.ts'
import type { RenderPipeline } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RenderType } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
/**
 * TODO: Known issue: player armor + hand items
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams.kt:38}
 */
export class ModuleChams extends ClientModule {
    static ENTITY_CUTOUT: (param0: Identifier) => RenderType;
    static ENTITY_CUTOUT_NO_CULL: (param0: Identifier, param1: boolean) => RenderType;
    static ENTITY_TRANSLUCENT: (param0: Identifier, param1: boolean) => RenderType;
    static INSTANCE: ModuleChams;
    ENTITY_CUTOUT: (param0: Identifier) => RenderType;
    ENTITY_CUTOUT_NO_CULL: (param0: Identifier, param1: boolean) => RenderType;
    ENTITY_TRANSLUCENT: (param0: Identifier, param1: boolean) => RenderType;
    // private PIPELINE_ENTITY_CUTOUT: RenderPipeline;
    // private PIPELINE_ENTITY_CUTOUT_NO_CULL: RenderPipeline;
    // private PIPELINE_ENTITY_TRANSLUCENT: RenderPipeline;
    // private depthStencilState: DepthStencilState;
}