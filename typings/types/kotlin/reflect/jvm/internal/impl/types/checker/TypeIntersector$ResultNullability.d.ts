import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export class TypeIntersector$ResultNullability extends Enum<TypeIntersector$ResultNullability> {
    static ACCEPT_NULL: TypeIntersector$ResultNullability;
    static NOT_NULL: TypeIntersector$ResultNullability;
    static START: TypeIntersector$ResultNullability;
    static UNKNOWN: TypeIntersector$ResultNullability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeIntersector$ResultNullability;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: DefaultConstructorMarker)
    combine(arg0: UnwrappedType): TypeIntersector$ResultNullability;
    getResultNullability(arg0: UnwrappedType): TypeIntersector$ResultNullability;
    name(): "START" | "ACCEPT_NULL" | "UNKNOWN" | "NOT_NULL";
}