import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class Annotations$Type extends Enum<Annotations$Type> {
    static CONSTRAINT_OR_VISITOR: Annotations$Type;
    static FACTORY: Annotations$Type;
    static PARAMETER: Annotations$Type;
    static PLUGIN: Annotations$Type;
    static UNKNOWN: Annotations$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Annotations$Type;
    static values(): Annotations$Type[];
    private constructor()
    name(): "PARAMETER" | "FACTORY" | "PLUGIN" | "CONSTRAINT_OR_VISITOR" | "UNKNOWN";
}