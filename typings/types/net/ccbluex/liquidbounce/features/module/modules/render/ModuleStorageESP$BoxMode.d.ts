import type { AtomicBoolean } from '../../../../../../../kotlinx/atomicfu/AtomicBoolean.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ModuleStorageESP$BoxMode$EntityBox } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleStorageESP$BoxMode$EntityBox.d.ts'
import type { StaticMeshStorage } from '../../../../../../../net/ccbluex/liquidbounce/render/StaticMeshStorage.d.ts'
export class ModuleStorageESP$BoxMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStorageESP$BoxMode;
    // private blockFacesRenderState: StaticMeshStorage;
    // private blockOutlinesRenderState: StaticMeshStorage;
    // private dirtyFlag: AtomicBoolean;
    // private entityBoxes: ModuleStorageESP$BoxMode$EntityBox[];
    // private outline: boolean;
    // private /*not mapped: */ getOutline(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
    enable(): void;
    markDirty(): void;
}