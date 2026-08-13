import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class Filter extends Enum<Filter> implements Tagged {
    static BLACKLIST: Filter;
    static Companion: Tagged$Companion;
    static WHITELIST: Filter;
    static getEntries(): Filter[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Filter;
    static values(): Filter[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @returns true if the {@link item} should be included according to the filter.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Filter.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Filter.kt:39}
     */
    invoke<T extends unknown>(item: T, collection: T[]): boolean;
    name(): "WHITELIST" | "BLACKLIST";
}