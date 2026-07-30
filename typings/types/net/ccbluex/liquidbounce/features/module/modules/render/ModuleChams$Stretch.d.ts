import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChams$ImageMappingMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageMappingMode.d.ts'
import type { ModuleChams$ImageUniform } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageUniform.d.ts'
export class ModuleChams$Stretch extends ModuleChams$ImageMappingMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChams$Stretch;
    uniform(targetWidth: number, targetHeight: number, imageWidth: number, imageHeight: number): ModuleChams$ImageUniform;
}