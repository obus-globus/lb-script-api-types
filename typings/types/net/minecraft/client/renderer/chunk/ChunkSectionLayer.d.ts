import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Transparency } from '../../../../../com/mojang/blaze3d/platform/Transparency.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ChunkSectionLayer extends Enum<ChunkSectionLayer> {
    static CUTOUT: ChunkSectionLayer;
    static SOLID: ChunkSectionLayer;
    static TRANSLUCENT: ChunkSectionLayer;
    static byTransparency(paramtransparency: Transparency): ChunkSectionLayer;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkSectionLayer;
    static values(): ChunkSectionLayer[];
    private constructor(pipeline: RenderPipeline, bufferSize: number, translucent: boolean)
    // private bufferSize: number;
    // private label: string;
    // private pipeline: RenderPipeline;
    // private translucent: boolean;
    bufferSize(): number;
    label(): string;
    pipeline(): RenderPipeline;
    translucent(): boolean;
    vertexFormat(): VertexFormat;
    name(): "SOLID" | "CUTOUT" | "TRANSLUCENT";
}