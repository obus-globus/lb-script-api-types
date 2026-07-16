import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ObjectiveSortOrder extends Enum<ObjectiveSortOrder> {
    static Ascending: ObjectiveSortOrder;
    static Descending: ObjectiveSortOrder;
    static getByName(paramarg0: string): ObjectiveSortOrder;
    static getByName(paramarg0: string, paramarg1: ObjectiveSortOrder): ObjectiveSortOrder;
    static getByValue(paramarg0: number): ObjectiveSortOrder;
    static getByValue(paramarg0: number, paramarg1: ObjectiveSortOrder): ObjectiveSortOrder;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ObjectiveSortOrder;
    static values(): ObjectiveSortOrder[];
    private constructor(arg2: number)
    private constructor(arg2: ObjectiveSortOrder)
    readonly value: number;
    getValue(): number;
    name(): "Ascending" | "Descending";
}