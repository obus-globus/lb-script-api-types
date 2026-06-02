import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AdvancementRenderContext$Icon } from '../../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/advancement/AdvancementRenderContext$Icon.d.ts'
export interface AdvancementRenderer$IconRenderer extends Object{
    extractAdvancementIcon(arg0: AdvancementRenderContext$Icon): void;
    shouldRenderOriginalIcon(): boolean;
}