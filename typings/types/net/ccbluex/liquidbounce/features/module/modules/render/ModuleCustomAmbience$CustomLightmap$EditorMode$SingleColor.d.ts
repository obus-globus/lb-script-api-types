import type { GpuTexture } from '../../../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleCustomAmbience$CustomLightmap$EditorMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$CustomLightmap$EditorMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { LightmapRenderState } from '../../../../../../../net/minecraft/client/renderer/state/LightmapRenderState.d.ts'
export class ModuleCustomAmbience$CustomLightmap$EditorMode$SingleColor extends ModuleCustomAmbience$CustomLightmap$EditorMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleCustomAmbience$CustomLightmap$EditorMode$SingleColor;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    edit(texture: GpuTexture, lightmapRenderState: LightmapRenderState): boolean;
}