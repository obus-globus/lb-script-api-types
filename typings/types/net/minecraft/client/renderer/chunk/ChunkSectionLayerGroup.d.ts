import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class ChunkSectionLayerGroup extends Enum<ChunkSectionLayerGroup> {
    static OPAQUE: ChunkSectionLayerGroup;
    static TRANSLUCENT: ChunkSectionLayerGroup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ChunkSectionLayerGroup;
    static values(): ChunkSectionLayerGroup[];
    private constructor(...layers: ChunkSectionLayer[])
    // private label: string;
    // private layers: ChunkSectionLayer[];
    label(): string;
    layers(): ChunkSectionLayer[];
    outputTarget(): RenderTarget;
    name(): "OPAQUE" | "TRANSLUCENT";
}