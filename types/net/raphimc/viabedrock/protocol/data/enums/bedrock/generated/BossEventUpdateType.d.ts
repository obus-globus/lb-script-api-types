import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class BossEventUpdateType extends Enum<BossEventUpdateType> {
    static Add: BossEventUpdateType;
    static PlayerAdded: BossEventUpdateType;
    static PlayerRemoved: BossEventUpdateType;
    static Query: BossEventUpdateType;
    static Remove: BossEventUpdateType;
    static Update_Name: BossEventUpdateType;
    static Update_Percent: BossEventUpdateType;
    static Update_Properties: BossEventUpdateType;
    static Update_Style: BossEventUpdateType;
    static getByName(paramarg0: string): BossEventUpdateType;
    static getByName(paramarg0: string, paramarg1: BossEventUpdateType): BossEventUpdateType;
    static getByValue(paramarg0: number): BossEventUpdateType;
    static getByValue(paramarg0: number, paramarg1: BossEventUpdateType): BossEventUpdateType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BossEventUpdateType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: BossEventUpdateType)
    readonly value: number;
    getValue(): number;
    name(): "Add" | "PlayerAdded" | "Remove" | "PlayerRemoved" | "Update_Percent" | "Update_Name" | "Update_Properties" | "Update_Style" | "Query";
}