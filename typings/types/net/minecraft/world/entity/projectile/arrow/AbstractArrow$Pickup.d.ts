import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class AbstractArrow$Pickup extends Enum<AbstractArrow$Pickup> {
    static ALLOWED: AbstractArrow$Pickup;
    static CREATIVE_ONLY: AbstractArrow$Pickup;
    static DISALLOWED: AbstractArrow$Pickup;
    static LEGACY_CODEC: Codec<AbstractArrow$Pickup>;
    static byOrdinal(paramordinal: number): AbstractArrow$Pickup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AbstractArrow$Pickup;
    static values(): AbstractArrow$Pickup[];
    private constructor()
    name(): "DISALLOWED" | "ALLOWED" | "CREATIVE_ONLY";
}