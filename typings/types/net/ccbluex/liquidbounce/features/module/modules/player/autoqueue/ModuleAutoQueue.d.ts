import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoQueue$PauseCondition } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoqueue/ModuleAutoQueue$PauseCondition.d.ts'
export class ModuleAutoQueue extends ClientModule {
    static INSTANCE: ModuleAutoQueue;
    // private pause: ModuleAutoQueue$PauseCondition[];
    // private /*not mapped: */ getPause(): ModuleAutoQueue$PauseCondition[];
    readonly presets: ModeValueGroup<Mode>;
    readonly shouldPause: boolean;
}