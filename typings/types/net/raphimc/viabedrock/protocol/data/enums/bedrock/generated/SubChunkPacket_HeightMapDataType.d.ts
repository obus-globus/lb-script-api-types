import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SubChunkPacket_HeightMapDataType extends Enum<SubChunkPacket_HeightMapDataType> {
    static AllCopied: SubChunkPacket_HeightMapDataType;
    static AllTooHigh: SubChunkPacket_HeightMapDataType;
    static AllTooLow: SubChunkPacket_HeightMapDataType;
    static HasData: SubChunkPacket_HeightMapDataType;
    static NoData: SubChunkPacket_HeightMapDataType;
    static getByName(paramarg0: string): SubChunkPacket_HeightMapDataType;
    static getByName(paramarg0: string, paramarg1: SubChunkPacket_HeightMapDataType): SubChunkPacket_HeightMapDataType;
    static getByValue(paramarg0: number): SubChunkPacket_HeightMapDataType;
    static getByValue(paramarg0: number, paramarg1: SubChunkPacket_HeightMapDataType): SubChunkPacket_HeightMapDataType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SubChunkPacket_HeightMapDataType;
    static values(): SubChunkPacket_HeightMapDataType[];
    private constructor(arg2: number)
    private constructor(arg2: SubChunkPacket_HeightMapDataType)
    readonly value: number;
    getValue(): number;
    name(): "NoData" | "HasData" | "AllTooHigh" | "AllTooLow" | "AllCopied";
}