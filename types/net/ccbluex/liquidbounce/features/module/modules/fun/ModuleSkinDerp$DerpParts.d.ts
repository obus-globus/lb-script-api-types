import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { PlayerModelPart } from '../../../../../../../net/minecraft/world/entity/player/PlayerModelPart.d.ts'
export class ModuleSkinDerp$DerpParts extends Enum<ModuleSkinDerp$DerpParts> implements Tagged {
    static CAPE: ModuleSkinDerp$DerpParts;
    static Companion: Tagged$Companion;
    static HAT: ModuleSkinDerp$DerpParts;
    static JACKET: ModuleSkinDerp$DerpParts;
    static LEFT_PANTS: ModuleSkinDerp$DerpParts;
    static LEFT_SLEEVE: ModuleSkinDerp$DerpParts;
    static RIGHT_PANTS: ModuleSkinDerp$DerpParts;
    static RIGHT_SLEEVE: ModuleSkinDerp$DerpParts;
    static getEntries(): ModuleSkinDerp$DerpParts[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleSkinDerp$DerpParts;
    static values(): (Object | null)[];
    private constructor(tag: string, part: PlayerModelPart)
    readonly part: PlayerModelPart;
    readonly tag: string;
    name(): "HAT" | "JACKET" | "LEFT_PANTS" | "RIGHT_PANTS" | "LEFT_SLEEVE" | "RIGHT_SLEEVE" | "CAPE";
}