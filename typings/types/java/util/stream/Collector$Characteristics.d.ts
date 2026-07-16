import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Collector$Characteristics extends Enum<Collector$Characteristics> {
    static CONCURRENT: Collector$Characteristics;
    static IDENTITY_FINISH: Collector$Characteristics;
    static UNORDERED: Collector$Characteristics;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Collector$Characteristics;
    static values(): Collector$Characteristics[];
    private constructor()
    name(): "CONCURRENT" | "UNORDERED" | "IDENTITY_FINISH";
}