import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SpawnPositionType extends Enum<SpawnPositionType> {
    static PlayerRespawn: SpawnPositionType;
    static WorldSpawn: SpawnPositionType;
    static getByName(paramarg0: string): SpawnPositionType;
    static getByName(paramarg0: string, paramarg1: SpawnPositionType): SpawnPositionType;
    static getByValue(paramarg0: number): SpawnPositionType;
    static getByValue(paramarg0: number, paramarg1: SpawnPositionType): SpawnPositionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SpawnPositionType;
    static values(): SpawnPositionType[];
    private constructor(arg2: number)
    private constructor(arg2: SpawnPositionType)
    readonly value: number;
    getValue(): number;
    name(): "PlayerRespawn" | "WorldSpawn";
}