import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ModuleItemESP$Legacy2DMode extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleItemESP$Legacy2DMode;
    // private backgroundAlpha: number;
    // private /*not mapped: */ getBackgroundAlpha(): number;
    // private entities: Entity[];
    readonly parent: ModeValueGroup<Mode>;
    getParent(): ModeValueGroup<Mode>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private yOffset: number;
    // private /*not mapped: */ getYOffset(): number;
    disable(): void;
}