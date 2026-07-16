import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BiomeTemperatureCategory extends Enum<BiomeTemperatureCategory> {
    static Cold: BiomeTemperatureCategory;
    static Frozen: BiomeTemperatureCategory;
    static Lukewarm: BiomeTemperatureCategory;
    static Medium: BiomeTemperatureCategory;
    static Warm: BiomeTemperatureCategory;
    static getByName(paramarg0: string): BiomeTemperatureCategory;
    static getByName(paramarg0: string, paramarg1: BiomeTemperatureCategory): BiomeTemperatureCategory;
    static getByValue(paramarg0: number): BiomeTemperatureCategory;
    static getByValue(paramarg0: number, paramarg1: BiomeTemperatureCategory): BiomeTemperatureCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BiomeTemperatureCategory;
    static values(): BiomeTemperatureCategory[];
    private constructor(arg2: number)
    private constructor(arg2: BiomeTemperatureCategory)
    readonly value: number;
    getValue(): number;
    name(): "Medium" | "Warm" | "Lukewarm" | "Cold" | "Frozen";
}