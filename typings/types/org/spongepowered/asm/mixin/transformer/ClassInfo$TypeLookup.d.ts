import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClassInfo$TypeLookup extends Enum<ClassInfo$TypeLookup> {
    static DECLARED_TYPE: ClassInfo$TypeLookup;
    static ELEMENT_TYPE: ClassInfo$TypeLookup;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClassInfo$TypeLookup;
    static values(): ClassInfo$TypeLookup[];
    private constructor()
    name(): "DECLARED_TYPE" | "ELEMENT_TYPE";
}