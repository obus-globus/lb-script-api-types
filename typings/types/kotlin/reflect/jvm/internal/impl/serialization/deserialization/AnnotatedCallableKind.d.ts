import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class AnnotatedCallableKind extends Enum<AnnotatedCallableKind> {
    static FUNCTION: AnnotatedCallableKind;
    static PROPERTY: AnnotatedCallableKind;
    static PROPERTY_GETTER: AnnotatedCallableKind;
    static PROPERTY_SETTER: AnnotatedCallableKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AnnotatedCallableKind;
    static values(): AnnotatedCallableKind[];
    private constructor()
    name(): "FUNCTION" | "PROPERTY" | "PROPERTY_GETTER" | "PROPERTY_SETTER";
}