import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class TextComponentTagVisitor$Token extends Enum<TextComponentTagVisitor$Token> {
    static BYTE_ARRAY_PREFIX: TextComponentTagVisitor$Token;
    static BYTE_SUFFIX: TextComponentTagVisitor$Token;
    static DOUBLE_SUFFIX: TextComponentTagVisitor$Token;
    static ELEMENT_SEPARATOR: TextComponentTagVisitor$Token;
    static FLOAT_SUFFIX: TextComponentTagVisitor$Token;
    static FOLDED: TextComponentTagVisitor$Token;
    static INT_ARRAY_PREFIX: TextComponentTagVisitor$Token;
    static LIST_CLOSE: TextComponentTagVisitor$Token;
    static LIST_OPEN: TextComponentTagVisitor$Token;
    static LIST_TYPE_SEPARATOR: TextComponentTagVisitor$Token;
    static LONG_ARRAY_PREFIX: TextComponentTagVisitor$Token;
    static LONG_SUFFIX: TextComponentTagVisitor$Token;
    static NAME_VALUE_SEPARATOR: TextComponentTagVisitor$Token;
    static SHORT_SUFFIX: TextComponentTagVisitor$Token;
    static STRUCT_CLOSE: TextComponentTagVisitor$Token;
    static STRUCT_OPEN: TextComponentTagVisitor$Token;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TextComponentTagVisitor$Token;
    static values(): TextComponentTagVisitor$Token[];
    private constructor(text: string)
    text: string;
    name(): "FOLDED" | "ELEMENT_SEPARATOR" | "LIST_CLOSE" | "LIST_OPEN" | "LIST_TYPE_SEPARATOR" | "STRUCT_CLOSE" | "STRUCT_OPEN" | "NAME_VALUE_SEPARATOR" | "BYTE_SUFFIX" | "BYTE_ARRAY_PREFIX" | "SHORT_SUFFIX" | "INT_ARRAY_PREFIX" | "LONG_SUFFIX" | "LONG_ARRAY_PREFIX" | "FLOAT_SUFFIX" | "DOUBLE_SUFFIX";
}