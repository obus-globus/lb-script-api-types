import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { ModuleBlockESP$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP$Mode.d.ts'
import type { CachedMeshStorage } from '../../../../../../../net/ccbluex/liquidbounce/render/CachedMeshStorage.d.ts'
export class ModuleBlockESP$BoxMode extends ModuleBlockESP$Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleBlockESP$BoxMode;
    // private facesRenderState: CachedMeshStorage;
    // private outline: boolean;
    // private /*not mapped: */ getOutline(): boolean;
    // private outlinesRenderState: CachedMeshStorage;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}