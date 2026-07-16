import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ReturnValueStatus$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/ReturnValueStatus$Companion.d.ts'
export class ReturnValueStatus extends Enum<ReturnValueStatus> {
    static Companion: ReturnValueStatus$Companion;
    static ExplicitlyIgnorable: ReturnValueStatus;
    static MustUse: ReturnValueStatus;
    static Unspecified: ReturnValueStatus;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ReturnValueStatus;
    static values(): ReturnValueStatus[];
    private constructor()
    name(): "MustUse" | "ExplicitlyIgnorable" | "Unspecified";
}