import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Zip64Mode extends Enum<Zip64Mode> {
    static Always: Zip64Mode;
    static AlwaysWithCompatibility: Zip64Mode;
    static AsNeeded: Zip64Mode;
    static Never: Zip64Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Zip64Mode;
    static values(): Zip64Mode[];
    private constructor()
    name(): "Always" | "Never" | "AsNeeded" | "AlwaysWithCompatibility";
}