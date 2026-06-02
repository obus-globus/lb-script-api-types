import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleRotations$BodyPart extends Enum<ModuleRotations$BodyPart> implements Tagged {
    static BODY: ModuleRotations$BodyPart;
    static Companion: Tagged$Companion;
    static HEAD: ModuleRotations$BodyPart;
    static getEntries(): ModuleRotations$BodyPart[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleRotations$BodyPart;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "HEAD" | "BODY";
}