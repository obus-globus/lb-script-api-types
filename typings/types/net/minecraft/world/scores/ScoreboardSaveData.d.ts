import type { SavedData } from '../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { ScoreboardSaveData$Packed } from '../../../../net/minecraft/world/scores/ScoreboardSaveData$Packed.d.ts'
export class ScoreboardSaveData extends SavedData {
    static TYPE: SavedDataType<ScoreboardSaveData>;
    constructor(data: ScoreboardSaveData$Packed)
    readonly data: ScoreboardSaveData$Packed;
    getData(): ScoreboardSaveData$Packed;
    setData(data: ScoreboardSaveData$Packed): void;
}