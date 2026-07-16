import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ConstructorHead$Enforce extends Enum<ConstructorHead$Enforce> {
    static DEFAULT: ConstructorHead$Enforce;
    static POST_DELEGATE: ConstructorHead$Enforce;
    static POST_INIT: ConstructorHead$Enforce;
    static PRE_BODY: ConstructorHead$Enforce;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ConstructorHead$Enforce;
    static values(): ConstructorHead$Enforce[];
    private constructor()
    name(): "DEFAULT" | "POST_DELEGATE" | "POST_INIT" | "PRE_BODY";
}