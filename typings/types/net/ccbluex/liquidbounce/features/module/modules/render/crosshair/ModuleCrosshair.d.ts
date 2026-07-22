import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CrosshairMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/crosshair/CrosshairMode.d.ts'
export class ModuleCrosshair extends ClientModule {
    static INSTANCE: ModuleCrosshair;
    readonly modes: ModeValueGroup<CrosshairMode>;
    getModes(): ModeValueGroup<CrosshairMode>;
}