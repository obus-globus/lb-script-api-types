import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelSimulatedReader } from '../../../../../net/minecraft/world/level/LevelSimulatedReader.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Column$Range } from '../../../../../net/minecraft/world/level/levelgen/Column$Range.d.ts'
export abstract class Column extends Object {
    static above(paramfloor: number): Column;
    static around(paramlowest: number, paramhighest: number): Column$Range;
    static below(paramceiling: number): Column;
    static create(paramfloor: OptionalInt, paramceiling: OptionalInt): Column;
    static fromHighest(paramhighest: number): Column;
    static fromLowest(paramlowest: number): Column;
    static inside(paramfloor: number, paramceiling: number): Column$Range;
    static line(): Column;
    static scan(paramlevel: LevelSimulatedReader, parampos: BlockPos, paramsearchRange: number, paraminsideColumn: (param0: BlockState) => kotlin.Boolean, paramvalidEdge: (param0: BlockState) => kotlin.Boolean): Optional<Column>;
    constructor()
    getCeiling(): OptionalInt;
    getFloor(): OptionalInt;
    getHeight(): OptionalInt;
    withCeiling(ceiling: OptionalInt): Column;
    withFloor(floor: OptionalInt): Column;
}