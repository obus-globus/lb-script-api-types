import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DataItemType extends Enum<DataItemType> {
    static Byte: DataItemType;
    static CompoundTag: DataItemType;
    static Float: DataItemType;
    static Int: DataItemType;
    static Int64: DataItemType;
    static Pos: DataItemType;
    static Short: DataItemType;
    static String: DataItemType;
    static Unknown: DataItemType;
    static Vec3: DataItemType;
    static getByName(paramarg0: string): DataItemType;
    static getByName(paramarg0: string, paramarg1: DataItemType): DataItemType;
    static getByValue(paramarg0: number): DataItemType;
    static getByValue(paramarg0: number, paramarg1: DataItemType): DataItemType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DataItemType;
    static values(): DataItemType[];
    private constructor(arg2: number)
    private constructor(arg2: DataItemType)
    readonly value: number;
    getValue(): number;
    name(): "Byte" | "Short" | "Int" | "Float" | "String" | "CompoundTag" | "Pos" | "Int64" | "Vec3" | "Unknown";
}