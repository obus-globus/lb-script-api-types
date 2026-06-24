import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
export class MultiChoiceListValue<T extends Tagged> extends Value<T[]> {
    constructor(name: string, value: T[], choices: T[], canBeNone: boolean, isOrderSensitive: boolean)
    /**
     * Can deselect all values or enable at least one
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:44}
     */
    readonly canBeNone: boolean;
    // private choiceByName: { [key: string]: T };
    /**
     * All selectable choices. A readonly and ordered {@link Set}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:39}
     */
    readonly choices: T[];
    // private isOrderSensitive: boolean;
    /**
     * Determines whether the order of enabled values matters.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:49}
     */
    /*not mapped: */ isOrderSensitive(): boolean;
    contains(choice: T): boolean;
    deserializeFrom(gson: Gson, element: JsonElement): void;
    toggle(value: T): boolean;
}