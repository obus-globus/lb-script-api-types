import type { RenderPipeline } from '../../../../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderPass } from '../../../../../../../../com/mojang/blaze3d/systems/RenderPass.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderRegion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegion.d.ts'
import type { CameraTransform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
export abstract class DrawContext extends Object {
    static PUSH_CONSTANT_RANGE: number;
    static create(): DrawContext;
    constructor()
    pass: RenderPass;
    delete(): void;
    endDraw(): void;
    getPass(): RenderPass;
    rotate(): void;
    setContext(arg0: RenderPass, arg1: RenderPipeline): void;
    updateData(arg0: RenderRegion, arg1: CameraTransform): void;
}