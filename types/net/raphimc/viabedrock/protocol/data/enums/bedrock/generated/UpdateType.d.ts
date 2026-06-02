import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class UpdateType extends Enum<UpdateType> {
    static Connections: UpdateType;
    static Neighbors: UpdateType;
    static None: UpdateType;
    static getByName(paramarg0: string): UpdateType;
    static getByName(paramarg0: string, paramarg1: UpdateType): UpdateType;
    static getByValue(paramarg0: number): UpdateType;
    static getByValue(paramarg0: number, paramarg1: UpdateType): UpdateType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UpdateType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: UpdateType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Neighbors" | "Connections";
}