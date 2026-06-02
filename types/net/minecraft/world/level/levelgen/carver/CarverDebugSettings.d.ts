import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CarverDebugSettings extends Object {
    static CODEC: Codec<CarverDebugSettings>;
    static DEFAULT: CarverDebugSettings;
    static of(paramdebugMode: boolean, paramairState: BlockState): CarverDebugSettings;
    static of(paramenabled: boolean, paramairState: BlockState, paramwaterState: BlockState, paramlavaState: BlockState, parambarrierState: BlockState): CarverDebugSettings;
    static of(paramairState: BlockState, paramwaterState: BlockState, paramlavaState: BlockState, parambarrierState: BlockState): CarverDebugSettings;
    private constructor(debugMode: boolean, airState: BlockState, waterState: BlockState, lavaState: BlockState, barrierState: BlockState)
    readonly airState: BlockState;
    readonly barrierState: BlockState;
    readonly debugMode: boolean;
    readonly lavaState: BlockState;
    readonly waterState: BlockState;
    getAirState(): BlockState;
    getBarrierState(): BlockState;
    getLavaState(): BlockState;
    getWaterState(): BlockState;
    isDebugMode(): boolean;
}