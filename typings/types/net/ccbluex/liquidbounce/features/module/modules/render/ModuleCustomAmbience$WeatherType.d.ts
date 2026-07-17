import type { Class } from '../../../../../../../java/lang/Class.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleCustomAmbience$WeatherType;
    static values(): ModuleCustomAmbience$WeatherType[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "NO_CHANGE" | "SUNNY" | "RAINY" | "SNOWY" | "THUNDER";
}