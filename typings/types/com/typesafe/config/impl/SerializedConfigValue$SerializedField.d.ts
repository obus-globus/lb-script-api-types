import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SerializedConfigValue$SerializedField extends Enum<SerializedConfigValue$SerializedField> {
    static END_MARKER: SerializedConfigValue$SerializedField;
    static ORIGIN_COMMENTS: SerializedConfigValue$SerializedField;
    static ORIGIN_DESCRIPTION: SerializedConfigValue$SerializedField;
    static ORIGIN_END_LINE_NUMBER: SerializedConfigValue$SerializedField;
    static ORIGIN_LINE_NUMBER: SerializedConfigValue$SerializedField;
    static ORIGIN_NULL_COMMENTS: SerializedConfigValue$SerializedField;
    static ORIGIN_NULL_RESOURCE: SerializedConfigValue$SerializedField;
    static ORIGIN_NULL_URL: SerializedConfigValue$SerializedField;
    static ORIGIN_RESOURCE: SerializedConfigValue$SerializedField;
    static ORIGIN_TYPE: SerializedConfigValue$SerializedField;
    static ORIGIN_URL: SerializedConfigValue$SerializedField;
    static ROOT_VALUE: SerializedConfigValue$SerializedField;
    static ROOT_WAS_CONFIG: SerializedConfigValue$SerializedField;
    static UNKNOWN: SerializedConfigValue$SerializedField;
    static VALUE_DATA: SerializedConfigValue$SerializedField;
    static VALUE_ORIGIN: SerializedConfigValue$SerializedField;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SerializedConfigValue$SerializedField;
    static values(): SerializedConfigValue$SerializedField[];
    private constructor()
    name(): "UNKNOWN" | "END_MARKER" | "ROOT_VALUE" | "ROOT_WAS_CONFIG" | "VALUE_DATA" | "VALUE_ORIGIN" | "ORIGIN_DESCRIPTION" | "ORIGIN_LINE_NUMBER" | "ORIGIN_END_LINE_NUMBER" | "ORIGIN_TYPE" | "ORIGIN_URL" | "ORIGIN_COMMENTS" | "ORIGIN_NULL_URL" | "ORIGIN_NULL_COMMENTS" | "ORIGIN_RESOURCE" | "ORIGIN_NULL_RESOURCE";
}