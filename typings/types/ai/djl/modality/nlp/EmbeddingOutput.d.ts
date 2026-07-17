import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmbeddingOutput extends Object {
    constructor()
    readonly denseEmbedding: number[];
    readonly lexicalWeights: JavaMap<string, number>;
    addTokenWeights(arg0: string, arg1: number): void;
    getDenseEmbedding(): number[];
    getLexicalWeights(): JavaMap<string, number>;
    setDenseEmbedding(arg0: number[]): void;
}