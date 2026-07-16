import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleFucker$DestroyAction extends Enum<ModuleFucker$DestroyAction> implements Tagged {
    static Companion: Tagged$Companion;
    static DESTROY: ModuleFucker$DestroyAction;
    static USE: ModuleFucker$DestroyAction;
    static getEntries(): ModuleFucker$DestroyAction[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleFucker$DestroyAction;
    static values(): ModuleFucker$DestroyAction[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DESTROY" | "USE";
}