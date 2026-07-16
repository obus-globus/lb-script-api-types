import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Biome$Temperature extends Enum<Biome$Temperature> {
    static COLD: Biome$Temperature;
    static MEDIUM: Biome$Temperature;
    static OCEAN: Biome$Temperature;
    static WARM: Biome$Temperature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Biome$Temperature;
    static values(): Biome$Temperature[];
    private constructor(arg2: string)
    getName(): string;
    name(): "OCEAN" | "COLD" | "MEDIUM" | "WARM";
}