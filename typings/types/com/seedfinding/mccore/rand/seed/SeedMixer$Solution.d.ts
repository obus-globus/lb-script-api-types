import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SeedMixer$Solution extends Enum<SeedMixer$Solution> {
    static EVEN: SeedMixer$Solution;
    static ODD: SeedMixer$Solution;
    static of(paramarg0: number): SeedMixer$Solution;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SeedMixer$Solution;
    static values(): SeedMixer$Solution[];
    private constructor()
    name(): "EVEN" | "ODD";
}