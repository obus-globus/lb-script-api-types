import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class SymbolKind extends Enum<SymbolKind> {
    static Array: SymbolKind;
    static Boolean: SymbolKind;
    static Class: SymbolKind;
    static Constant: SymbolKind;
    static Constructor: SymbolKind;
    static Enum: SymbolKind;
    static EnumMember: SymbolKind;
    static Event: SymbolKind;
    static Field: SymbolKind;
    static File: SymbolKind;
    static Function: SymbolKind;
    static Interface: SymbolKind;
    static Key: SymbolKind;
    static Method: SymbolKind;
    static Module: SymbolKind;
    static Namespace: SymbolKind;
    static Null: SymbolKind;
    static Number: SymbolKind;
    static Object: SymbolKind;
    static Operator: SymbolKind;
    static Package: SymbolKind;
    static Property: SymbolKind;
    static String: SymbolKind;
    static Struct: SymbolKind;
    static TypeParameter: SymbolKind;
    static Variable: SymbolKind;
    static get(paramintValue: number): SymbolKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SymbolKind;
    static values(): (Object | null)[];
    private constructor(intValue: number)
    readonly intValue: number;
    getIntValue(): number;
    name(): "File" | "Module" | "Namespace" | "Package" | "Class" | "Method" | "Property" | "Field" | "Constructor" | "Enum" | "Interface" | "Function" | "Variable" | "Constant" | "String" | "Number" | "Boolean" | "Array" | "Object" | "Key" | "Null" | "EnumMember" | "Struct" | "Event" | "Operator" | "TypeParameter";
}