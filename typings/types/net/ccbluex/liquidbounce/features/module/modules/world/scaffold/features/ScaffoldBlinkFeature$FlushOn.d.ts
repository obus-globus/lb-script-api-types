import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Packet } from '../../../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
export class ScaffoldBlinkFeature$FlushOn extends Enum<ScaffoldBlinkFeature$FlushOn> implements Predicate<Packet<Object>>, Tagged {
    static Companion: Tagged$Companion;
    static IN_AIR: ScaffoldBlinkFeature$FlushOn;
    static NOT_SNEAKING: ScaffoldBlinkFeature$FlushOn;
    static ON_GROUND: ScaffoldBlinkFeature$FlushOn;
    static PLACE: ScaffoldBlinkFeature$FlushOn;
    static SNEAKING: ScaffoldBlinkFeature$FlushOn;
    static TOWERING: ScaffoldBlinkFeature$FlushOn;
    static getEntries(): ScaffoldBlinkFeature$FlushOn[];
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScaffoldBlinkFeature$FlushOn;
    static values(): (Object | null)[];
    private constructor(tag: string, cond: (param0: Packet<Object> | null) => kotlin.Boolean)
    // private cond: (param0: Packet<Object> | null) => kotlin.Boolean;
    readonly tag: string;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    test(p0: Packet<Object> | null): boolean;
    name(): "PLACE" | "TOWERING" | "SNEAKING" | "NOT_SNEAKING" | "ON_GROUND" | "IN_AIR";
}