import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { Theme } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
export class Theme$ComponentSettings extends ValueGroup {
    constructor(null_: Theme)
    prepareDeserialize(jsonObject: JsonObject): void;
}