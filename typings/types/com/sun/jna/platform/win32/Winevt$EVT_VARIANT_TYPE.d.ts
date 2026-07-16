import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Winevt$EVT_VARIANT_TYPE extends Enum<Winevt$EVT_VARIANT_TYPE> {
    static EvtVarTypeAnsiString: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeBinary: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeBoolean: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeByte: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeDouble: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeEvtHandle: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeEvtXml: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeFileTime: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeGuid: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeHexInt32: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeHexInt64: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeInt16: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeInt32: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeInt64: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeNull: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeSByte: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeSid: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeSingle: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeSizeT: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeString: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeSysTime: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeUInt16: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeUInt32: Winevt$EVT_VARIANT_TYPE;
    static EvtVarTypeUInt64: Winevt$EVT_VARIANT_TYPE;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Winevt$EVT_VARIANT_TYPE;
    static values(): Winevt$EVT_VARIANT_TYPE[];
    private constructor(arg2: string)
    readonly field: string;
    getArrField(): string;
    getField(): string;
    name(): "EvtVarTypeNull" | "EvtVarTypeString" | "EvtVarTypeAnsiString" | "EvtVarTypeSByte" | "EvtVarTypeByte" | "EvtVarTypeInt16" | "EvtVarTypeUInt16" | "EvtVarTypeInt32" | "EvtVarTypeUInt32" | "EvtVarTypeInt64" | "EvtVarTypeUInt64" | "EvtVarTypeSingle" | "EvtVarTypeDouble" | "EvtVarTypeBoolean" | "EvtVarTypeBinary" | "EvtVarTypeGuid" | "EvtVarTypeSizeT" | "EvtVarTypeFileTime" | "EvtVarTypeSysTime" | "EvtVarTypeSid" | "EvtVarTypeHexInt32" | "EvtVarTypeHexInt64" | "EvtVarTypeEvtHandle" | "EvtVarTypeEvtXml";
}