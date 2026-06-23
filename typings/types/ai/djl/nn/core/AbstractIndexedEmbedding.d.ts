import type { AbstractEmbedding } from '../../../../ai/djl/nn/core/AbstractEmbedding.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AbstractIndexedEmbedding<T extends unknown> extends AbstractEmbedding<T>, Object{
    decode(arg0: number[]): T;
    embed(arg0: T): number;
    encode(arg0: T): number[];
    unembed(arg0: number): Optional<T>;
}