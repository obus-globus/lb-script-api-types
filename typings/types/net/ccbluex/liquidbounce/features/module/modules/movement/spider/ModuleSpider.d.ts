import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ModuleSpider extends ClientModule {
    static INSTANCE: ModuleSpider;
    // private modes: ModeValueGroup<Mode>;
    /*not mapped: */ getModes$net_ccbluex_liquidbounce(): ModeValueGroup<Mode>;
}