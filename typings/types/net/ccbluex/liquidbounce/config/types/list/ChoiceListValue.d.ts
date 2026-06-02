import type { Gson } from '../../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
export class ChoiceListValue<T extends Tagged> extends Value<T> {
    constructor(name: string, aliases: string[], defaultValue: T, choices: T[])
    // private choiceByName: { [key: string]: T };
    readonly choices: T[];
    deserializeFrom(gson: Gson, element: JsonElement): void;
    getChoicesStrings(): string[];
    setByString(string: string): void;
}