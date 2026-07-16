import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KeyDispatchDataCodec } from '../../../../../net/minecraft/util/KeyDispatchDataCodec.d.ts'
import type { DensityFunction } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { DensityFunction$ContextProvider } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$ContextProvider.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { DensityFunction$Visitor } from '../../../../../net/minecraft/world/level/levelgen/DensityFunction$Visitor.d.ts'
import type { DensityFunctions$PureTransformer } from '../../../../../net/minecraft/world/level/levelgen/DensityFunctions$PureTransformer.d.ts'
export class DensityFunctions$Clamp extends Record implements DensityFunctions$PureTransformer {
    static CODEC: KeyDispatchDataCodec<DensityFunctions$Clamp>;
    constructor(input: DensityFunction, minValue: number, maxValue: number)
    // private input: DensityFunction;
    // private maxValue: number;
    // private minValue: number;
    codec(): KeyDispatchDataCodec<DensityFunction>;
    compute(context: DensityFunction$FunctionContext): number;
    equals(o: Object | null): boolean;
    fillArray(output: number[], contextProvider: DensityFunction$ContextProvider): void;
    hashCode(): number;
    input(): DensityFunction;
    mapChildren(visitor: DensityFunction$Visitor): DensityFunction;
    maxValue(): number;
    minValue(): number;
    toString(): string;
    transform(input: number): number;
}