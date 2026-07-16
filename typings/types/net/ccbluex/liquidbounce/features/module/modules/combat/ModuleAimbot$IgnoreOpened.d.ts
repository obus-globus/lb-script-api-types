import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAimbot$IgnoreOpened extends Enum<ModuleAimbot$IgnoreOpened> implements Tagged {
    static CONTAINER: ModuleAimbot$IgnoreOpened;
    static Companion: Tagged$Companion;
    static SCREEN: ModuleAimbot$IgnoreOpened;
    static getEntries(): ModuleAimbot$IgnoreOpened[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAimbot$IgnoreOpened;
    static values(): ModuleAimbot$IgnoreOpened[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SCREEN" | "CONTAINER";
}