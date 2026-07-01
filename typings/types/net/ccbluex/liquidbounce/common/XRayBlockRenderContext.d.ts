import type { QuadInstance } from '../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkSectionLayer } from '../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class XRayBlockRenderContext extends Object {
    static applyAlpha(paramarg0: number): number;
    static applyAlpha(paramarg0: QuadInstance): void;
    static forceTranslucentLayer(paramarg0: ChunkSectionLayer): ChunkSectionLayer;
    static isRenderingTransparentBackground(): boolean;
    static renderTransparentBackground(paramarg0: number, paramarg1: () => void): void;
    private constructor()
}