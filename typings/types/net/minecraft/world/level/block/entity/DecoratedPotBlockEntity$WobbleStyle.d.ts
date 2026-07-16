import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DecoratedPotBlockEntity$WobbleStyle extends Enum<DecoratedPotBlockEntity$WobbleStyle> {
    static NEGATIVE: DecoratedPotBlockEntity$WobbleStyle;
    static POSITIVE: DecoratedPotBlockEntity$WobbleStyle;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DecoratedPotBlockEntity$WobbleStyle;
    static values(): DecoratedPotBlockEntity$WobbleStyle[];
    private constructor(duration: number)
    duration: number;
    name(): "POSITIVE" | "NEGATIVE";
}