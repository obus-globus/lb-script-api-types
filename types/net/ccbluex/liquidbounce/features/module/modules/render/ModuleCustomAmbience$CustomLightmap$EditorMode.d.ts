import type { GpuTexture } from '../../../../../../../com/mojang/blaze3d/textures/GpuTexture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LightmapRenderState } from '../../../../../../../net/minecraft/client/renderer/state/LightmapRenderState.d.ts'
export class ModuleCustomAmbience$CustomLightmap$EditorMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<Object>;
    edit(texture: GpuTexture, lightmapRenderState: LightmapRenderState): boolean;
}