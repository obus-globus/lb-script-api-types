import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Background } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Background.d.ts'
import type { AdvancementRenderContext$Frame } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Frame.d.ts'
import type { AdvancementRenderContext$Icon } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Icon.d.ts'
import type { AdvancementRenderer$BackgroundRenderer } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderer$BackgroundRenderer.d.ts'
import type { AdvancementRenderer$FrameRenderer } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderer$FrameRenderer.d.ts'
import type { AdvancementRenderer$IconRenderer } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderer$IconRenderer.d.ts'
import type { Identifier } from '../../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class AdvancementRenderer extends Object {
    static registerBackground(paramarg0: (param0: AdvancementRenderContext$Background) => void, ...paramarg1: Identifier[]): void;
    static registerFrame(paramarg0: (param0: AdvancementRenderContext$Frame) => void, ...paramarg1: Identifier[]): void;
    static registerIcon(paramarg0: (param0: AdvancementRenderContext$Icon) => void, ...paramarg1: Identifier[]): void;
    private constructor()
}