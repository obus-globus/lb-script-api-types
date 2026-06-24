import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { StagedVertexBuffer } from '../../../../../net/minecraft/client/renderer/StagedVertexBuffer.d.ts'
import type { BlockStateModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
import type { OptionsRenderState } from '../../../../../net/minecraft/client/renderer/state/OptionsRenderState.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
export class FeatureFrameContext extends Record {
    constructor(options: OptionsRenderState, font: Font, blockStateModelSet: BlockStateModelSet, blockColors: BlockColors, textureManager: TextureManager, atlasManager: AtlasManager, lightmap: GpuTextureView, stagedVertexBuffer: StagedVertexBuffer)
    // private atlasManager: AtlasManager;
    // private blockColors: BlockColors;
    // private blockStateModelSet: BlockStateModelSet;
    // private font: Font;
    // private lightmap: GpuTextureView;
    // private options: OptionsRenderState;
    // private stagedVertexBuffer: StagedVertexBuffer;
    // private textureManager: TextureManager;
    atlasManager(): AtlasManager;
    blockColors(): BlockColors;
    blockStateModelSet(): BlockStateModelSet;
    equals(o: Object | null): boolean;
    font(): Font;
    hashCode(): number;
    lightmap(): GpuTextureView;
    options(): OptionsRenderState;
    stagedVertexBuffer(): StagedVertexBuffer;
    textureManager(): TextureManager;
    toString(): string;
}