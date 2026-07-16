import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$BeardifierOrMarker } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$BeardifierOrMarker.d.ts'
export class DensityFunctions$BeardifierMarker extends Enum<DensityFunctions$BeardifierMarker> implements DensityFunctions$BeardifierOrMarker {
    static CODEC: Codec<DensityFunction>;
    static INSTANCE: DensityFunctions$BeardifierMarker;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DensityFunctions$BeardifierMarker;
    static values(): DensityFunctions$BeardifierMarker[];
    private constructor()
    abs(): DensityFunction;
    clamp(min: number, max: number): DensityFunction;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    cube(): DensityFunction;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    halfNegative(): DensityFunction;
    invert(): DensityFunction;
    mapAll(visitor: DensityFunction$Visitor): DensityFunction;
    mapChildren(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    quarterNegative(): DensityFunction;
    square(): DensityFunction;
    squeeze(): DensityFunction;
    name(): "INSTANCE";
}