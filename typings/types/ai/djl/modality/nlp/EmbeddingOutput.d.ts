import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmbeddingOutput extends Object {
    constructor()
    readonly denseEmbedding: number[];
    readonly lexicalWeights: { [key: string]: number };
    addTokenWeights(arg0: string, arg1: number): void;
    getDenseEmbedding(): number[];
    getLexicalWeights(): { [key: string]: number };
    setDenseEmbedding(arg0: number[]): void;
}