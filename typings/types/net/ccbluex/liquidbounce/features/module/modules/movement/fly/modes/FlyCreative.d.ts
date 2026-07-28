import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
export class FlyCreative extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyCreative;
    // private bypassVanillaCheck: boolean;
    // private /*not mapped: */ getBypassVanillaCheck(): boolean;
    // private forceFlight: boolean;
    // private /*not mapped: */ getForceFlight(): boolean;
    // private maxVelocity: number;
    // private /*not mapped: */ getMaxVelocity(): number;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly repeatable: EventHook<GameTickEvent>;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    disable(): void;
    // private shouldFlyDown(): boolean;
}