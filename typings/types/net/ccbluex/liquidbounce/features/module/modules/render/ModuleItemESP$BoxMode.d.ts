import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ModuleItemESP$BoxMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleItemESP$BoxMode;
    // private box: AABB;
    // private entities: Entity[];
    // private mergeIntersecting: boolean;
    // private /*not mapped: */ getMergeIntersecting(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    disable(): void;
}