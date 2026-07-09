import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
export class MultiChoiceListValue<T extends Tagged> extends Value<T[]> {
    constructor(name: string, value: T[], choices: T[], canBeNone: boolean, isOrderSensitive: boolean)
    /**
     * Can deselect all values or enable at least one
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:47}
     */
    readonly canBeNone: boolean;
    // private choiceByName: { [key: string]: T };
    /**
     * All selectable choices. A readonly and ordered {@link Set}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:42}
     */
    readonly choices: T[];
    // private isOrderSensitive: boolean;
    /**
     * Determines whether the order of enabled values matters.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:52}
     */
    /*not mapped: */ isOrderSensitive(): boolean;
    contains(choice: T): boolean;
    deserializeFrom(gson: Gson, element: JsonElement): void;
    toggle(value: T): boolean;
}