import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Background } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Background.d.ts'
export interface AdvancementRenderer$BackgroundRenderer extends Object{
    extractAdvancementBackground(arg0: AdvancementRenderContext$Background): void;
    shouldRenderOriginalBackground(): boolean;
}