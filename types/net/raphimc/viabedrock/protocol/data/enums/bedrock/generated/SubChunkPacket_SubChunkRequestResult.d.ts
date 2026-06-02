import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SubChunkPacket_SubChunkRequestResult extends Enum<SubChunkPacket_SubChunkRequestResult> {
    static IndexOutOfBounds: SubChunkPacket_SubChunkRequestResult;
    static LevelChunkDoesntExist: SubChunkPacket_SubChunkRequestResult;
    static PlayerDoesntExist: SubChunkPacket_SubChunkRequestResult;
    static Success: SubChunkPacket_SubChunkRequestResult;
    static SuccessAllAir: SubChunkPacket_SubChunkRequestResult;
    static Undefined: SubChunkPacket_SubChunkRequestResult;
    static WrongDimension: SubChunkPacket_SubChunkRequestResult;
    static getByName(paramarg0: string): SubChunkPacket_SubChunkRequestResult;
    static getByName(paramarg0: string, paramarg1: SubChunkPacket_SubChunkRequestResult): SubChunkPacket_SubChunkRequestResult;
    static getByValue(paramarg0: number): SubChunkPacket_SubChunkRequestResult;
    static getByValue(paramarg0: number, paramarg1: SubChunkPacket_SubChunkRequestResult): SubChunkPacket_SubChunkRequestResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SubChunkPacket_SubChunkRequestResult;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: SubChunkPacket_SubChunkRequestResult)
    readonly value: number;
    getValue(): number;
    name(): "Undefined" | "Success" | "LevelChunkDoesntExist" | "WrongDimension" | "PlayerDoesntExist" | "IndexOutOfBounds" | "SuccessAllAir";
}