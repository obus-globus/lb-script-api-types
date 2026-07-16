import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Normalizer2$Mode extends Enum<Normalizer2$Mode> {
    static COMPOSE: Normalizer2$Mode;
    static COMPOSE_CONTIGUOUS: Normalizer2$Mode;
    static DECOMPOSE: Normalizer2$Mode;
    static FCD: Normalizer2$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Normalizer2$Mode;
    static values(): Normalizer2$Mode[];
    private constructor()
    name(): "COMPOSE" | "DECOMPOSE" | "FCD" | "COMPOSE_CONTIGUOUS";
}