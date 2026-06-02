import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Frame } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Frame.d.ts'
export interface AdvancementRenderer$FrameRenderer extends Object{
    extractAdvancementFrame(arg0: AdvancementRenderContext$Frame): void;
    shouldRenderOriginalFrame(): boolean;
    shouldRenderTooltip(): boolean;
}