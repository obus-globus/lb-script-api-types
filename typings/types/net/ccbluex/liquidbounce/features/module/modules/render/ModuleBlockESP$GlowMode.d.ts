import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { DrawOutlinesEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DrawOutlinesEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleBlockESP$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP$Mode.d.ts'
import type { CachedMeshStorage } from '../../../../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
export class ModuleBlockESP$GlowMode extends ModuleBlockESP$Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleBlockESP$GlowMode;
    // private renderHandler: EventHook<DrawOutlinesEvent>;
    // private renderState: CachedMeshStorage;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}