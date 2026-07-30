import type { RenderTarget } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChams$ChamsMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ChamsMode.d.ts'
import type { ModuleChams$ImageFiltering } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageFiltering.d.ts'
import type { ModuleChams$ImageMappingMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageMappingMode.d.ts'
import type { ModuleChams$ImageUniform } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageUniform.d.ts'
import type { CachedUniform } from '../../../../../../../net/ccbluex/liquidbounce/render/buffers/CachedUniform.d.ts'
import type { DynamicTexture } from '../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Vector2fc } from '../../../../../../../org/joml/Vector2fc.d.ts'
export class ModuleChams$Image extends ModuleChams$ChamsMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChams$Image;
    // private filtering: ModuleChams$ImageFiltering;
    // private /*not mapped: */ getFiltering(): ModuleChams$ImageFiltering;
    // private imageUniform: CachedUniform<ModuleChams$ImageUniform>;
    readonly mapping: ModeValueGroup<ModuleChams$ImageMappingMode>;
    // private offset: Vector2fc;
    // private /*not mapped: */ getOffset(): Vector2fc;
    // private texture: DynamicTexture | null;
    // private /*not mapped: */ getTexture(): DynamicTexture | null;
    render(target: RenderTarget, chamsTarget: RenderTarget): void;
}