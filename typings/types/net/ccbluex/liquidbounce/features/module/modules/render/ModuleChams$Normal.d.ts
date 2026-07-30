import type { RenderTarget } from '../../../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChams$ChamsMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleChams$ChamsMode.d.ts'
export class ModuleChams$Normal extends ModuleChams$ChamsMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChams$Normal;
    render(target: RenderTarget, chamsTarget: RenderTarget): void;
}