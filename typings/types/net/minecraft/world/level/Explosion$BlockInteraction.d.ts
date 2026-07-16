import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Explosion$BlockInteraction extends Enum<Explosion$BlockInteraction> {
    static DESTROY: Explosion$BlockInteraction;
    static DESTROY_WITH_DECAY: Explosion$BlockInteraction;
    static KEEP: Explosion$BlockInteraction;
    static TRIGGER_BLOCK: Explosion$BlockInteraction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Explosion$BlockInteraction;
    static values(): Explosion$BlockInteraction[];
    private constructor(shouldAffectBlocklikeEntities: boolean)
    // private shouldAffectBlocklikeEntities: boolean;
    shouldAffectBlocklikeEntities(): boolean;
    name(): "KEEP" | "DESTROY" | "DESTROY_WITH_DECAY" | "TRIGGER_BLOCK";
}