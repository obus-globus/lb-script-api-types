import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricValueInput } from '../../../../../net/fabricmc/fabric/api/serialization/v1/value/FabricValueInput.d.ts'
export interface ValueInputMixin extends Object, FabricValueInput{
    contains(arg0: string): boolean;
    getOptionalByteArray(arg0: string): Optional<number[]>;
    getOptionalLongArray(arg0: string): Optional<number[]>;
    keySet(): string[];
}