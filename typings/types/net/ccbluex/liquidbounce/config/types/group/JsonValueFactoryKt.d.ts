import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class JsonValueFactoryKt extends Object {
    /**
     * Assigns the value of the settings to the component
     *
     * A component can have dynamic settings which can be assigned through the JSON file
     * These have to be interpreted and assigned to the value group
     *
     * An example:
     * {
     *     "type": "INT",
     *     "name": "Size",
     *     "value": 14,
     *     "range": {
     *         "min": 1,
     *         "max": 100
     *     },
     *     "suffix": "px"
     * }
     *
     * TODO: Replace with proper deserialization
     *
     * @param valueObject JsonObject
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/JsonValueFactory.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/JsonValueFactory.kt:96}
     */
    static json(self: ValueGroup, valueObject: JsonObject): void;
}