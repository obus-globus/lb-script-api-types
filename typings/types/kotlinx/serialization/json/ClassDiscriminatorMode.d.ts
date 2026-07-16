import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ClassDiscriminatorMode extends Enum<ClassDiscriminatorMode> {
    static ALL_JSON_OBJECTS: ClassDiscriminatorMode;
    static NONE: ClassDiscriminatorMode;
    static POLYMORPHIC: ClassDiscriminatorMode;
    static getEntries(): ClassDiscriminatorMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClassDiscriminatorMode;
    static values(): ClassDiscriminatorMode[];
    private constructor()
    name(): "NONE" | "ALL_JSON_OBJECTS" | "POLYMORPHIC";
}