import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleCustomAmbience$WeatherType extends Enum<ModuleCustomAmbience$WeatherType> implements Tagged {
    static Companion: Tagged$Companion;
    static NO_CHANGE: ModuleCustomAmbience$WeatherType;
    static RAINY: ModuleCustomAmbience$WeatherType;
    static SNOWY: ModuleCustomAmbience$WeatherType;
    static SUNNY: ModuleCustomAmbience$WeatherType;
    static THUNDER: ModuleCustomAmbience$WeatherType;
    static getEntries(): ModuleCustomAmbience$WeatherType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleCustomAmbience$WeatherType;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NO_CHANGE" | "SUNNY" | "RAINY" | "SNOWY" | "THUNDER";
}