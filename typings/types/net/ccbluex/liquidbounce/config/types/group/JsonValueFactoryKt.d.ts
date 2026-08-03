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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/JsonValueFactory.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/config/types/group/JsonValueFactory.kt:96}
     */
    static json(self: ValueGroup, valueObject: JsonObject): void;
}