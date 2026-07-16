import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerLocationPacket_Type extends Enum<PlayerLocationPacket_Type> {
    static PLAYER_LOCATION_COORDINATES: PlayerLocationPacket_Type;
    static PLAYER_LOCATION_HIDE: PlayerLocationPacket_Type;
    static getByName(paramarg0: string): PlayerLocationPacket_Type;
    static getByName(paramarg0: string, paramarg1: PlayerLocationPacket_Type): PlayerLocationPacket_Type;
    static getByValue(paramarg0: number): PlayerLocationPacket_Type;
    static getByValue(paramarg0: number, paramarg1: PlayerLocationPacket_Type): PlayerLocationPacket_Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PlayerLocationPacket_Type;
    static values(): PlayerLocationPacket_Type[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerLocationPacket_Type)
    readonly value: number;
    getValue(): number;
    name(): "PLAYER_LOCATION_COORDINATES" | "PLAYER_LOCATION_HIDE";
}