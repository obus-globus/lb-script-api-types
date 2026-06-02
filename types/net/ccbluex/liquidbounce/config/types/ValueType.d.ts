import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { AutoCompletionProvider } from '../../../../../net/ccbluex/liquidbounce/config/utils/AutoCompletionProvider.d.ts'
import type { HumanInputDeserializer$StringDeserializer } from '../../../../../net/ccbluex/liquidbounce/utils/input/HumanInputDeserializer$StringDeserializer.d.ts'
export class ValueType extends Enum<ValueType> {
    static ACCOUNT: ValueType;
    static BIND: ValueType;
    static BLOCK: ValueType;
    static BOOLEAN: ValueType;
    static C2S_PACKET: ValueType;
    static CHOICE: ValueType;
    static CHOOSE: ValueType;
    static CLIENT_MODULE: ValueType;
    static COLOR: ValueType;
    static CONFIGURABLE: ValueType;
    static CURVE: ValueType;
    static ENCHANTMENT: ValueType;
    static ENTITY_TYPE: ValueType;
    static FILE: ValueType;
    static FLOAT: ValueType;
    static FLOAT_RANGE: ValueType;
    static FRIEND: ValueType;
    static INT: ValueType;
    static INT_RANGE: ValueType;
    static INVALID: ValueType;
    static ITEM: ValueType;
    static KEY: ValueType;
    static LIST: ValueType;
    static MENU: ValueType;
    static MOB_EFFECT: ValueType;
    static MULTI_CHOOSE: ValueType;
    static MUTABLE_LIST: ValueType;
    static NAMED_ITEM_LIST: ValueType;
    static PROXY: ValueType;
    static REGISTRY_LIST: ValueType;
    static S2C_PACKET: ValueType;
    static SOUND_EVENT: ValueType;
    static SUBSCRIBED_ITEM: ValueType;
    static TEXT: ValueType;
    static TOGGLEABLE: ValueType;
    static VECTOR2_F: ValueType;
    static VECTOR3_D: ValueType;
    static VECTOR3_I: ValueType;
    static getEntries(): ValueType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ValueType;
    static values(): (Object | null)[];
    private constructor(deserializer: HumanInputDeserializer$StringDeserializer<Object> | null, completer: AutoCompletionProvider)
    readonly completer: AutoCompletionProvider;
    readonly deserializer: HumanInputDeserializer$StringDeserializer<Object> | null;
    name(): "BOOLEAN" | "FLOAT" | "FLOAT_RANGE" | "INT" | "INT_RANGE" | "TEXT" | "COLOR" | "BLOCK" | "ITEM" | "ENCHANTMENT" | "SOUND_EVENT" | "MOB_EFFECT" | "MENU" | "ENTITY_TYPE" | "C2S_PACKET" | "S2C_PACKET" | "CLIENT_MODULE" | "KEY" | "FILE" | "BIND" | "VECTOR3_I" | "VECTOR3_D" | "VECTOR2_F" | "LIST" | "CHOOSE" | "MULTI_CHOOSE" | "MUTABLE_LIST" | "NAMED_ITEM_LIST" | "REGISTRY_LIST" | "CURVE" | "CONFIGURABLE" | "TOGGLEABLE" | "CHOICE" | "FRIEND" | "PROXY" | "ACCOUNT" | "SUBSCRIBED_ITEM" | "INVALID";
}