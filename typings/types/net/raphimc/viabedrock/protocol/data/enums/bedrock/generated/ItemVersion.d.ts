import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemVersion extends Enum<ItemVersion> {
    static DataDriven: ItemVersion;
    static Legacy: ItemVersion;
    static None: ItemVersion;
    static getByName(paramarg0: string): ItemVersion;
    static getByName(paramarg0: string, paramarg1: ItemVersion): ItemVersion;
    static getByValue(paramarg0: number): ItemVersion;
    static getByValue(paramarg0: number, paramarg1: ItemVersion): ItemVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ItemVersion;
    static values(): ItemVersion[];
    private constructor(arg2: number)
    private constructor(arg2: ItemVersion)
    readonly value: number;
    getValue(): number;
    name(): "Legacy" | "DataDriven" | "None";
}