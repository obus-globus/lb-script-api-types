import type { RenderPassBackend } from '../../../../../../com/mojang/blaze3d/systems/RenderPassBackend.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface RenderPassAccessor extends Object{
    getBackend(): RenderPassBackend;
}