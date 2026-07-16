import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Phantom$AttackPhase extends Enum<Phantom$AttackPhase> {
    static CIRCLE: Phantom$AttackPhase;
    static SWOOP: Phantom$AttackPhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Phantom$AttackPhase;
    static values(): Phantom$AttackPhase[];
    private constructor()
    name(): "CIRCLE" | "SWOOP";
}