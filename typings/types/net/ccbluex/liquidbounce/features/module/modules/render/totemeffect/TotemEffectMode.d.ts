import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Easing } from '../../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
export abstract class TotemEffectMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private animCurve: Easing;
    // private /*not mapped: */ getAnimCurve(): Easing;
    // private canBeCovered: boolean;
    // private /*not mapped: */ getCanBeCovered(): boolean;
    // private fade: number;
    // private /*not mapped: */ getFade(): number;
    readonly lifetime: number;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private renderHandler: EventHook<WorldRenderEvent>;
}