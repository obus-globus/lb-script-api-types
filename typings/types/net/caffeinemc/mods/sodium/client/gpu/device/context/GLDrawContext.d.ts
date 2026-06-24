import type { RenderPipeline } from '../../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { CameraTransform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
export class GLDrawContext extends DrawContext {
    static PUSH_CONSTANT_RANGE: number;
    static create(): DrawContext;
    constructor()
    // private idUniform: number;
    // private regionUniform: number;
    // private timeUniform: number;
    delete(): void;
    endDraw(): void;
    rotate(): void;
    setContext(arg0: RenderPass, arg1: RenderPipeline): void;
    updateData(arg0: RenderRegion, arg1: CameraTransform): void;
}