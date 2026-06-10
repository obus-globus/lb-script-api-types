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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Filter;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    /**
     * @returns true if the {@link item} should be included according to the filter.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Filter.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/Filter.kt:36}
     */
    invoke<T extends Object | number | string | boolean>(item: T, collection: T[]): boolean;
    name(): "WHITELIST" | "BLACKLIST";
}