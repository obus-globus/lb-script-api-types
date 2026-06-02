import type { GpuBufferSlice } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuSampler } from '../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTexture } from '../../../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { GpuTextureView } from '../../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleItemChams$Lightmap extends ToggleableValueGroup {
    static INSTANCE: ModuleItemChams$Lightmap;
    // private UBO: GpuBufferSlice;
    // private alpha: number;
    // private /*not mapped: */ getAlpha(): number;
    // private blendColor: Color4b;
    // private /*not mapped: */ getBlendColor(): Color4b;
    // private edited: boolean;
    // private falloff: number;
    // private /*not mapped: */ getFalloff(): number;
    // private glowColor: Color4b;
    // private /*not mapped: */ getGlowColor(): Color4b;
    // private layerSize: number;
    // private /*not mapped: */ getLayerSize(): number;
    // private layers: number;
    // private /*not mapped: */ getLayers(): number;
    // private sampler: GpuSampler;
    // private storedLightmapTexture: GpuTexture | null;
    // private uboDirty: boolean;
    applyToTexture(textureView: GpuTextureView): void;
    onDisabled(): void;
    resetTexture(texture: GpuTextureView): void;
}