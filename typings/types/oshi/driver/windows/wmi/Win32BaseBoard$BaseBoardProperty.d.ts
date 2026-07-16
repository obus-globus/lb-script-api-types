import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32BaseBoard$BaseBoardProperty extends Enum<Win32BaseBoard$BaseBoardProperty> {
    static MANUFACTURER: Win32BaseBoard$BaseBoardProperty;
    static MODEL: Win32BaseBoard$BaseBoardProperty;
    static PRODUCT: Win32BaseBoard$BaseBoardProperty;
    static SERIALNUMBER: Win32BaseBoard$BaseBoardProperty;
    static VERSION: Win32BaseBoard$BaseBoardProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32BaseBoard$BaseBoardProperty;
    static values(): Win32BaseBoard$BaseBoardProperty[];
    private constructor()
    name(): "MANUFACTURER" | "MODEL" | "PRODUCT" | "VERSION" | "SERIALNUMBER";
}