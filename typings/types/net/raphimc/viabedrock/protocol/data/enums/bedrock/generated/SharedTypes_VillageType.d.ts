import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_VillageType extends Enum<SharedTypes_VillageType> {
    static Default: SharedTypes_VillageType;
    static Desert: SharedTypes_VillageType;
    static Ice: SharedTypes_VillageType;
    static Savanna: SharedTypes_VillageType;
    static Taiga: SharedTypes_VillageType;
    static getByName(paramarg0: string): SharedTypes_VillageType;
    static getByName(paramarg0: string, paramarg1: SharedTypes_VillageType): SharedTypes_VillageType;
    static getByValue(paramarg0: number): SharedTypes_VillageType;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_VillageType): SharedTypes_VillageType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SharedTypes_VillageType;
    static values(): SharedTypes_VillageType[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_VillageType)
    readonly value: number;
    getValue(): number;
    name(): "Desert" | "Ice" | "Savanna" | "Taiga" | "Default";
}