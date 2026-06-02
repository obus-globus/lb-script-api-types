import type { SparseFormat } from '../../../../ai/djl/ndarray/types/SparseFormat.d.ts'
import type { AbstractIndexedEmbedding } from '../../../../ai/djl/nn/core/AbstractIndexedEmbedding.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Embedding$BaseBuilder<T extends Object | number | string | boolean, B extends Embedding$BaseBuilder<T, B>> extends Object {
    constructor()
    // private defaultItem: T;
    // private embeddingSize: number;
    embeddingType: Class<T>;
    // private fallthrough: AbstractIndexedEmbedding<T>;
    // private numEmbeddings: number;
    // private sparseFormat: SparseFormat;
    // private useDefault: boolean;
    getEmbeddingType(): Class<T>;
    optDefaultItem(arg0: T): B;
    optFallthrough(arg0: AbstractIndexedEmbedding<T>): B;
    optNumEmbeddings(arg0: number): B;
    optSparseFormat(arg0: SparseFormat): B;
    optUseDefault(arg0: boolean): B;
    self(): B;
    setEmbeddingSize(arg0: number): B;
    setType(arg0: Class<T>): B;
}