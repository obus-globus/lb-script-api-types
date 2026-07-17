import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export class TypeIntersector$ResultNullability extends Enum<TypeIntersector$ResultNullability> {
    static ACCEPT_NULL: TypeIntersector$ResultNullability;
    static NOT_NULL: TypeIntersector$ResultNullability;
    static START: TypeIntersector$ResultNullability;
    static UNKNOWN: TypeIntersector$ResultNullability;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TypeIntersector$ResultNullability;
    static values(): TypeIntersector$ResultNullability[];
    private constructor()
    combine(arg0: UnwrappedType): TypeIntersector$ResultNullability;
    getResultNullability(arg0: UnwrappedType): TypeIntersector$ResultNullability;
    name(): "START" | "ACCEPT_NULL" | "UNKNOWN" | "NOT_NULL";
}