import type { AtomicBoolean } from '../../../../../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { DrawOutlinesEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/DrawOutlinesEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { CachedMeshStorage } from '../../../../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
export class ModuleStorageESP$GlowMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStorageESP$GlowMode;
    // private dirtyFlag: AtomicBoolean;
    // private glowRenderHandler: EventHook<DrawOutlinesEvent>;
    readonly parent: ModeValueGroup<Mode>;
    // private renderState: CachedMeshStorage;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
    enable(): void;
    markDirty(): void;
}