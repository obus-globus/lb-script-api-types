import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
export class MultiChoiceListValue<T extends Tagged> extends Value<T[]> {
    constructor(name: string, value: T[], choices: T[], canBeNone: boolean, isOrderSensitive: boolean)
    /**
     * Can deselect all values or enable at least one
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:47}
     */
    readonly canBeNone: boolean;
    // private choiceByName: JavaMap<string, T>;
    /**
     * All selectable choices. A readonly and ordered {@link Set}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:42}
     */
    readonly choices: T[];
    // private isOrderSensitive: boolean;
    /**
     * Determines whether the order of enabled values matters.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.kt:52}
     */
    /*not mapped: */ isOrderSensitive(): boolean;
    contains(choice: T): boolean;
    deserializeFrom(gson: Gson, element: JsonElement): void;
    toggle(value: T): boolean;
}