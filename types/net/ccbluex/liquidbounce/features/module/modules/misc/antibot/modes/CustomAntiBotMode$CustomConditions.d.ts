import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { AntiBotPredicate } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotPredicate.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class CustomAntiBotMode$CustomConditions extends Enum<CustomAntiBotMode$CustomConditions> implements Tagged, AntiBotPredicate {
    static ATTRIBUTES: CustomAntiBotMode$CustomConditions;
    static CRITTED: CustomAntiBotMode$CustomConditions;
    static Companion: Tagged$Companion;
    static DUPLICATE: CustomAntiBotMode$CustomConditions;
    static FAKE_ENTITY_ID: CustomAntiBotMode$CustomConditions;
    static ILLEGAL_HEALTH: CustomAntiBotMode$CustomConditions;
    static ILLEGAL_PITCH: CustomAntiBotMode$CustomConditions;
    static ILLEGAL_SCALE: CustomAntiBotMode$CustomConditions;
    static NEED_IT: CustomAntiBotMode$CustomConditions;
    static NO_GAME_MODE: CustomAntiBotMode$CustomConditions;
    static SWUNG: CustomAntiBotMode$CustomConditions;
    static getEntries(): CustomAntiBotMode$CustomConditions[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CustomAntiBotMode$CustomConditions;
    static values(): (Object | null)[];
    private constructor(tag: string, isBot: AntiBotPredicate)
    // private isBot: AntiBotPredicate;
    readonly tag: string;
    isBot(entity: Player): boolean;
    name(): "DUPLICATE" | "NO_GAME_MODE" | "ILLEGAL_PITCH" | "FAKE_ENTITY_ID" | "NEED_IT" | "ILLEGAL_HEALTH" | "SWUNG" | "CRITTED" | "ATTRIBUTES" | "ILLEGAL_SCALE";
}