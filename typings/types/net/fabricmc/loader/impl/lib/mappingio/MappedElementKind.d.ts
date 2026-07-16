import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MappedElementKind extends Enum<MappedElementKind> {
    static CLASS: MappedElementKind;
    static FIELD: MappedElementKind;
    static METHOD: MappedElementKind;
    static METHOD_ARG: MappedElementKind;
    static METHOD_VAR: MappedElementKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MappedElementKind;
    static values(): MappedElementKind[];
    private constructor(arg2: number)
    level: number;
    name(): "CLASS" | "FIELD" | "METHOD" | "METHOD_ARG" | "METHOD_VAR";
}