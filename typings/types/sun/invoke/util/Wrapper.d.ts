import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassDesc } from '../../../java/lang/constant/ClassDesc.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Wrapper extends Enum<Wrapper> {
    static BOOLEAN: Wrapper;
    static BYTE: Wrapper;
    static CHAR: Wrapper;
    static COUNT: number;
    static DOUBLE: Wrapper;
    static FLOAT: Wrapper;
    static INT: Wrapper;
    static LONG: Wrapper;
    static OBJECT: Wrapper;
    static SHORT: Wrapper;
    static VOID: Wrapper;
    static asPrimitiveType(paramarg0: Class<Object>): Class<Object>;
    static asWrapperType(paramarg0: Class<Object>): Class<Object>;
    static basicTypeChar(paramarg0: Class<Object>): string;
    static forBasicType(paramarg0: string): Wrapper;
    static forBasicType(paramarg0: Class<Object>): Wrapper;
    static forPrimitiveType(paramarg0: Class<Object>): Wrapper;
    static forWrapperType(paramarg0: Class<Object>): Wrapper;
    static isPrimitiveType(paramarg0: Class<Object>): boolean;
    static isWrapperNumericOrBooleanType(paramarg0: Class<Object>): boolean;
    static isWrapperType(paramarg0: Class<Object>): boolean;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Wrapper;
    static values(): (Object | null)[];
    private constructor(arg2: Class<Object>, arg3: string, arg4: Class<Object>, arg5: string, arg6: string, arg7: Object, arg8: number, arg9: number, arg10: number, arg11: ClassDesc, arg12: ClassDesc)
    // private basicClassDesc: ClassDesc;
    // private basicTypeChar: string;
    // private basicTypeString: string;
    // private emptyArray: Object;
    // private format: number;
    // private numericClass: number;
    // private primitiveSimpleName: string;
    // private primitiveType: Class<Object>;
    // private superClasses: number;
    // private wrapperClassDesc: ClassDesc;
    // private wrapperSimpleName: string;
    // private wrapperType: Class<Object>;
    arrayType(): Class<Object>;
    basicClassDescriptor(): ClassDesc;
    basicTypeChar(): string;
    basicTypeString(): string;
    bitWidth(): number;
    cast<T extends Object | number | string | boolean>(arg0: Object, arg1: Class<T>): T;
    convert<T extends Object | number | string | boolean>(arg0: Object, arg1: Class<T>): T;
    // private convert<T extends Object | number | string | boolean>(arg0: Object, arg1: Class<T>, arg2: boolean): T;
    copyArrayBoxing(arg0: Object, arg1: number, arg2: Object[], arg3: number, arg4: number): void;
    copyArrayUnboxing(arg0: Object[], arg1: number, arg2: Object, arg3: number, arg4: number): void;
    detailString(): string;
    isConvertibleFrom(arg0: Wrapper): boolean;
    isDoubleWord(): boolean;
    isFloating(): boolean;
    isIntegral(): boolean;
    isNumeric(): boolean;
    isOther(): boolean;
    isSigned(): boolean;
    isSingleWord(): boolean;
    isStrictSubRangeOf(arg0: Wrapper): boolean;
    isSubwordOrInt(): boolean;
    isUnsigned(): boolean;
    makeArray(arg0: number): Object;
    primitiveSimpleName(): string;
    primitiveType(): Class<Object>;
    stackSlots(): number;
    wrap(arg0: Object): Object;
    wrap(arg0: number): Object;
    wrapperClassDescriptor(): ClassDesc;
    wrapperSimpleName(): string;
    wrapperType(): Class<Object>;
    wrapperType(arg0: Class<T>): Class<T>;
    zero(): Object;
    zero<T extends Object | number | string | boolean>(arg0: Class<T>): T;
    name(): "BOOLEAN" | "BYTE" | "SHORT" | "CHAR" | "INT" | "LONG" | "FLOAT" | "DOUBLE" | "OBJECT" | "VOID";
}