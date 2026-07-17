import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { AntiBotMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotMode.d.ts'
import type { CustomAntiBotMode$CustomConditions } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/CustomAntiBotMode$CustomConditions.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CustomAntiBotMode extends AntiBotMode {
    static Companion: Tagged$Companion;
    static INSTANCE: CustomAntiBotMode;
    // private armorSet: (Object | null)[];
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private attributesSet: (Object | null)[];
    // private crittedSet: (Object | null)[];
    // private customConditions: CustomAntiBotMode$CustomConditions[];
    // private /*not mapped: */ getCustomConditions(): CustomAntiBotMode$CustomConditions[];
    // private flyingSet: JavaMap<any, any>;
    // private hitSet: (Object | null)[];
    // private notAlwaysInRadiusSet: (Object | null)[];
    // private packetHandler: EventHook<PacketEvent>;
    // private swungSet: (Object | null)[];
    // private tickHandler: EventHook<GameTickEvent>;
    // private hasInvalidGround(player: Player): boolean;
    isBot(entity: Player): boolean;
    reset(): void;
}