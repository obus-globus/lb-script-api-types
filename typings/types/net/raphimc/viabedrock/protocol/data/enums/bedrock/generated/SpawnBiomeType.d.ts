import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SpawnBiomeType extends Enum<SpawnBiomeType> {
    static Default: SpawnBiomeType;
    static UserDefined: SpawnBiomeType;
    static getByName(paramarg0: string): SpawnBiomeType;
    static getByName(paramarg0: string, paramarg1: SpawnBiomeType): SpawnBiomeType;
    static getByValue(paramarg0: number): SpawnBiomeType;
    static getByValue(paramarg0: number, paramarg1: SpawnBiomeType): SpawnBiomeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SpawnBiomeType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SpawnBiomeType)
    readonly value: number;
    getValue(): number;
    name(): "Default" | "UserDefined";
}