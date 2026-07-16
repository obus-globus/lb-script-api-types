import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Property$ValueType extends Enum<Property$ValueType> {
    static BOOLEAN: Property$ValueType;
    static CLOSED_CHOICE: Property$ValueType;
    static DATE: Property$ValueType;
    static INTEGER: Property$ValueType;
    static LOCALE: Property$ValueType;
    static MIME_TYPE: Property$ValueType;
    static OPEN_CHOICE: Property$ValueType;
    static PROPERTY: Property$ValueType;
    static PROPER_NAME: Property$ValueType;
    static RATIONAL: Property$ValueType;
    static REAL: Property$ValueType;
    static TEXT: Property$ValueType;
    static URI: Property$ValueType;
    static URL: Property$ValueType;
    static XPATH: Property$ValueType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Property$ValueType;
    static values(): Property$ValueType[];
    private constructor()
    name(): "BOOLEAN" | "OPEN_CHOICE" | "CLOSED_CHOICE" | "DATE" | "INTEGER" | "LOCALE" | "MIME_TYPE" | "PROPER_NAME" | "RATIONAL" | "REAL" | "TEXT" | "URI" | "URL" | "XPATH" | "PROPERTY";
}