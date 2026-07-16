import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$SimpleFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$SimpleFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export class DensityFunctions$BlendOffset extends Enum<DensityFunctions$BlendOffset> implements DensityFunction$SimpleFunction {
    static CODEC: KeyDispatchDataCodec<DensityFunction>;
    static INSTANCE: DensityFunctions$BlendOffset;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$BlendOffset;
    static values(): DensityFunctions$BlendOffset[];
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