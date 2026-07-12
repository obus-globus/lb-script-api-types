import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ChunkSectionLayer } from '../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class ChunkSectionLayerGroup extends Enum<ChunkSectionLayerGroup> {
    static OPAQUE: ChunkSectionLayerGroup;
    static TRANSLUCENT: ChunkSectionLayerGroup;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChunkSectionLayerGroup;
    static values(): (Object | null)[];
    private constructor(...layers: ChunkSectionLayer[])
    // private label: string;
    // private layers: ChunkSectionLayer[];
    label(): string;
    layers(): ChunkSectionLayer[];
    outputTarget(): RenderTarget;
    name(): "OPAQUE" | "TRANSLUCENT";
}