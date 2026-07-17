import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleRotations$BodyPart extends Enum<ModuleRotations$BodyPart> implements Tagged {
    static BODY: ModuleRotations$BodyPart;
    static Companion: Tagged$Companion;
    static HEAD: ModuleRotations$BodyPart;
    static getEntries(): ModuleRotations$BodyPart[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleRotations$BodyPart;
    static values(): ModuleRotations$BodyPart[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "HEAD" | "BODY";
}