import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class PlayerListPacketType extends Enum<PlayerListPacketType> {
    static Add: PlayerListPacketType;
    static Remove: PlayerListPacketType;
    static getByName(paramarg0: string): PlayerListPacketType;
    static getByName(paramarg0: string, paramarg1: PlayerListPacketType): PlayerListPacketType;
    static getByValue(paramarg0: number): PlayerListPacketType;
    static getByValue(paramarg0: number, paramarg1: PlayerListPacketType): PlayerListPacketType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PlayerListPacketType;
    static values(): PlayerListPacketType[];
    private constructor(arg2: number)
    private constructor(arg2: PlayerListPacketType)
    readonly value: number;
    getValue(): number;
    name(): "Add" | "Remove";
}