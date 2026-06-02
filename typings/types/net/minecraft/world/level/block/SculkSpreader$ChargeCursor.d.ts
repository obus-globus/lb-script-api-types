import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { SculkSpreader } from '../../../../../net/minecraft/world/level/block/SculkSpreader.d.ts'
export class SculkSpreader$ChargeCursor extends Object {
    static CODEC: Codec<SculkSpreader$ChargeCursor>;
    static MAX_CURSOR_DECAY_DELAY: number;
    constructor(pos: BlockPos, charge: number)
    private constructor(pos: BlockPos, charge: number, decayDelay: number, updateDelay: number, facings: Optional<Direction[]>)
    readonly charge: number;
    readonly decayDelay: number;
    // private facings: Direction[];
    readonly pos: BlockPos;
    // private updateDelay: number;
    getCharge(): number;
    getDecayDelay(): number;
    getFacingData(): Direction[];
    getPos(): BlockPos;
    // private isPosUnreasonable(originPos: BlockPos): boolean;
    // private mergeWith(other: SculkSpreader$ChargeCursor): void;
    // private shouldUpdate(level: LevelAccessor, pos: BlockPos, isWorldGen: boolean): boolean;
    update(level: LevelAccessor, originPos: BlockPos, random: RandomSource, spreader: SculkSpreader, spreadVeins: boolean): void;
}