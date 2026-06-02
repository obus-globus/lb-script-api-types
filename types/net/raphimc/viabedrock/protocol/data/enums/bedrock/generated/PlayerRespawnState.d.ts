import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerRespawnState extends Enum<PlayerRespawnState> {
    static ClientReadyToSpawn: PlayerRespawnState;
    static ReadyToSpawn: PlayerRespawnState;
    static SearchingForSpawn: PlayerRespawnState;
    static getByName(paramarg0: string): PlayerRespawnState;
    static getByName(paramarg0: string, paramarg1: PlayerRespawnState): PlayerRespawnState;
    static getByValue(paramarg0: number): PlayerRespawnState;
    static getByValue(paramarg0: number, paramarg1: PlayerRespawnState): PlayerRespawnState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerRespawnState;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerRespawnState)
    readonly value: number;
    getValue(): number;
    name(): "SearchingForSpawn" | "ReadyToSpawn" | "ClientReadyToSpawn";
}