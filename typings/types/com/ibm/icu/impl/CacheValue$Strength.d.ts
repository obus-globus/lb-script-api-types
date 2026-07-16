import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CacheValue$Strength extends Enum<CacheValue$Strength> {
    static SOFT: CacheValue$Strength;
    static STRONG: CacheValue$Strength;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CacheValue$Strength;
    static values(): CacheValue$Strength[];
    private constructor()
    name(): "STRONG" | "SOFT";
}