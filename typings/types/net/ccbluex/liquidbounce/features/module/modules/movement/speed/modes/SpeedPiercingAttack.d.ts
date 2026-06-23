import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
import type { SwingMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
export class SpeedPiercingAttack extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private holdTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getHoldTime(): { start: number; endInclusive: number; step: number };
    // private ignoreHunger: boolean;
    // private /*not mapped: */ getIgnoreHunger(): boolean;
    // private minimumDurability: number;
    // private /*not mapped: */ getMinimumDurability(): number;
    // private onGround: boolean;
    // private /*not mapped: */ getOnGround(): boolean;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private tickHandler: EventHook<GameTickEvent>;
    // private waitForCooldown: boolean;
    // private /*not mapped: */ getWaitForCooldown(): boolean;
    disable(): void;
}