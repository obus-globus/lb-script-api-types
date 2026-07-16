import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Biome$Precipitation extends Enum<Biome$Precipitation> {
    static NONE: Biome$Precipitation;
    static RAIN: Biome$Precipitation;
    static SNOW: Biome$Precipitation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Biome$Precipitation;
    static values(): Biome$Precipitation[];
    private constructor(arg2: string)
    getName(): string;
    name(): "NONE" | "RAIN" | "SNOW";
}