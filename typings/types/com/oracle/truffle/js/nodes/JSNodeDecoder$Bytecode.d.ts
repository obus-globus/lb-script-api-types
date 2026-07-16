import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class JSNodeDecoder$Bytecode extends Enum<JSNodeDecoder$Bytecode> {
    static ID_CALL_EXTRACTED: JSNodeDecoder$Bytecode;
    static ID_CALL_EXTRACTED_LAZY: JSNodeDecoder$Bytecode;
    static ID_CALL_TARGET: JSNodeDecoder$Bytecode;
    static ID_COLLECT_ARRAY: JSNodeDecoder$Bytecode;
    static ID_COLLECT_LIST: JSNodeDecoder$Bytecode;
    static ID_FRAME_DESCRIPTOR: JSNodeDecoder$Bytecode;
    static ID_FUNCTION_DATA: JSNodeDecoder$Bytecode;
    static ID_FUNCTION_DATA_NAME_FIXUP: JSNodeDecoder$Bytecode;
    static ID_JSFRAME_SLOT: JSNodeDecoder$Bytecode;
    static ID_JUMP_TARGET: JSNodeDecoder$Bytecode;
    static ID_LDC_BIGINT: JSNodeDecoder$Bytecode;
    static ID_LDC_BOOLEAN: JSNodeDecoder$Bytecode;
    static ID_LDC_DOUBLE: JSNodeDecoder$Bytecode;
    static ID_LDC_ENUM: JSNodeDecoder$Bytecode;
    static ID_LDC_INT: JSNodeDecoder$Bytecode;
    static ID_LDC_JAVA_STRING: JSNodeDecoder$Bytecode;
    static ID_LDC_LONG: JSNodeDecoder$Bytecode;
    static ID_LDC_SINGLETON: JSNodeDecoder$Bytecode;
    static ID_LDC_STRING: JSNodeDecoder$Bytecode;
    static ID_LD_ARG: JSNodeDecoder$Bytecode;
    static ID_MOV: JSNodeDecoder$Bytecode;
    static ID_NODE: JSNodeDecoder$Bytecode;
    static ID_NODE_SOURCE_SECTION_FIXUP: JSNodeDecoder$Bytecode;
    static ID_NODE_TAGS_FIXUP: JSNodeDecoder$Bytecode;
    static ID_NOP: JSNodeDecoder$Bytecode;
    static ID_RETURN: JSNodeDecoder$Bytecode;
    static ID_SOURCE_SECTION: JSNodeDecoder$Bytecode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JSNodeDecoder$Bytecode;
    static values(): JSNodeDecoder$Bytecode[];
    private constructor()
    name(): "ID_NOP" | "ID_NODE" | "ID_RETURN" | "ID_LDC_INT" | "ID_LDC_LONG" | "ID_LDC_BOOLEAN" | "ID_LDC_DOUBLE" | "ID_LDC_ENUM" | "ID_LDC_STRING" | "ID_LDC_JAVA_STRING" | "ID_LDC_SINGLETON" | "ID_LDC_BIGINT" | "ID_LD_ARG" | "ID_MOV" | "ID_COLLECT_ARRAY" | "ID_COLLECT_LIST" | "ID_CALL_TARGET" | "ID_FRAME_DESCRIPTOR" | "ID_JSFRAME_SLOT" | "ID_SOURCE_SECTION" | "ID_FUNCTION_DATA" | "ID_FUNCTION_DATA_NAME_FIXUP" | "ID_JUMP_TARGET" | "ID_CALL_EXTRACTED" | "ID_CALL_EXTRACTED_LAZY" | "ID_NODE_SOURCE_SECTION_FIXUP" | "ID_NODE_TAGS_FIXUP";
}