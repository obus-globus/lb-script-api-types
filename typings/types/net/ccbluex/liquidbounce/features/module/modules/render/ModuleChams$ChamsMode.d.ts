import type { RenderTarget } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export abstract class ModuleChams$ChamsMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    render(target: RenderTarget, chamsTarget: RenderTarget): void;
}