import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChams$ImageUniform } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ImageUniform.d.ts'
export abstract class ModuleChams$ImageMappingMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeats: boolean;
    uniform(targetWidth: number, targetHeight: number, imageWidth: number, imageHeight: number): ModuleChams$ImageUniform;
}