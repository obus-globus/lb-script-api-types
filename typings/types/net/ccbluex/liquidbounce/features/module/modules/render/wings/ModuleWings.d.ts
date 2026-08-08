import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { WingsLines } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/wings/modes/WingsLines.d.ts'
export class ModuleWings extends ClientModule {
    static INSTANCE: ModuleWings;
    readonly modes: ModeValueGroup<WingsLines>;
    getModes(): ModeValueGroup<WingsLines>;
}