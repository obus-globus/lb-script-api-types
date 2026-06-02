import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricValueOutput } from '../../../../../net/fabricmc/fabric/api/serialization/v1/value/FabricValueOutput.d.ts'
export interface ValueOutputMixin extends Object, FabricValueOutput{
    putByteArray(arg0: string, arg1: number[]): void;
    putLongArray(arg0: string, arg1: number[]): void;
}