import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RenderSetup } from '../../../../../../../net/minecraft/client/renderer/rendertype/RenderSetup.d.ts'
export interface MixinRenderTypeAccessor extends Object{
    getName(): string;
    getState(): RenderSetup;
}