import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleDebugRecorder$DebugRecorderMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/debugrecorder/ModuleDebugRecorder$DebugRecorderMode.d.ts'
export class ModuleDebugRecorder extends ClientModule {
    static INSTANCE: ModuleDebugRecorder;
    readonly modes: ModeValueGroup<ModuleDebugRecorder$DebugRecorderMode<Object>>;
    getModes(): ModeValueGroup<ModuleDebugRecorder$DebugRecorderMode<Object>>;
}