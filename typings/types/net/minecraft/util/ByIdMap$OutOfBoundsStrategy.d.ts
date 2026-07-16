import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ByIdMap$OutOfBoundsStrategy extends Enum<ByIdMap$OutOfBoundsStrategy> {
    static CLAMP: ByIdMap$OutOfBoundsStrategy;
    static WRAP: ByIdMap$OutOfBoundsStrategy;
    static ZERO: ByIdMap$OutOfBoundsStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ByIdMap$OutOfBoundsStrategy;
    static values(): ByIdMap$OutOfBoundsStrategy[];
    private constructor()
    name(): "ZERO" | "WRAP" | "CLAMP";
}