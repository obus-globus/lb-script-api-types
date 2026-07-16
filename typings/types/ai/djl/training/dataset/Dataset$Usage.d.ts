import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Dataset$Usage extends Enum<Dataset$Usage> {
    static TEST: Dataset$Usage;
    static TRAIN: Dataset$Usage;
    static VALIDATION: Dataset$Usage;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Dataset$Usage;
    static values(): Dataset$Usage[];
    private constructor()
    name(): "TRAIN" | "TEST" | "VALIDATION";
}