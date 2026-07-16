import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$SimpleFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$SimpleFunction.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
export class DensityFunctions$YClampedGradient extends Record implements DensityFunction$SimpleFunction {
    static CODEC: KeyDispatchDataCodec<DensityFunctions$YClampedGradient>;
    private constructor(fromY: number, toY: number, fromValue: number, toValue: number)
    // private fromValue: number;
    // private fromY: number;
    // private toValue: number;
    // private toY: number;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    fromValue(): number;
    fromY(): number;
    hashCode(): number;
    mapChildren(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    toString(): string;
    toValue(): number;
    toY(): number;
}