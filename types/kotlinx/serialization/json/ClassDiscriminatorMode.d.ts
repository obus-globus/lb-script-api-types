import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ClassDiscriminatorMode extends Enum<ClassDiscriminatorMode> {
    static ALL_JSON_OBJECTS: ClassDiscriminatorMode;
    static NONE: ClassDiscriminatorMode;
    static POLYMORPHIC: ClassDiscriminatorMode;
    static getEntries(): ClassDiscriminatorMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClassDiscriminatorMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "ALL_JSON_OBJECTS" | "POLYMORPHIC";
}