import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleTNTTimer$ShowTimer$TimeUnit extends Enum<ModuleTNTTimer$ShowTimer$TimeUnit> implements IntFunction<string>, Tagged {
    static Companion: Tagged$Companion;
    static SECONDS: ModuleTNTTimer$ShowTimer$TimeUnit;
    static TICKS: ModuleTNTTimer$ShowTimer$TimeUnit;
    static getEntries(): ModuleTNTTimer$ShowTimer$TimeUnit[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTNTTimer$ShowTimer$TimeUnit;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    apply(t: number): string;
    name(): "TICKS" | "SECONDS";
}