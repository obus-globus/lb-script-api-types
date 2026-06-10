import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface FabricValueInput extends Object{
    contains(arg0: string): boolean;
    getOptionalByteArray(arg0: string): Optional<number[]>;
    getOptionalLongArray(arg0: string): Optional<number[]>;
    keySet(): string[];
}