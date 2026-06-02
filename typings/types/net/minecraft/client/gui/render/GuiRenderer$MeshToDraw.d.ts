import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { MeshData } from '../../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { TextureSetup } from '../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
export class GuiRenderer$MeshToDraw extends Record implements AutoCloseable {
    private constructor(mesh: MeshData, pipeline: RenderPipeline, textureSetup: TextureSetup, scissorArea: ScreenRectangle)
    // private mesh: MeshData;
    // private pipeline: RenderPipeline;
    // private scissorArea: ScreenRectangle;
    // private textureSetup: TextureSetup;
    close(): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mesh(): MeshData;
    pipeline(): RenderPipeline;
    scissorArea(): ScreenRectangle;
    textureSetup(): TextureSetup;
    toString(): string;
}