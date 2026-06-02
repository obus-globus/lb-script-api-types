import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Display$RenderState } from '../../../../../../net/minecraft/world/entity/Display$RenderState.d.ts'
export abstract class DisplayEntityRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    cameraXRot: number;
    cameraYRot: number;
    entityXRot: number;
    entityYRot: number;
    interpolationProgress: number;
    renderState: Display$RenderState;
    hasSubState(): boolean;
}