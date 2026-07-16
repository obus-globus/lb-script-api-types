import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
export class StandardCompressionAlgorithms {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static FN: Function<Identifiable, string>;
    static NAME: string;
    static fn<T extends Identifiable>(): Function<T, string>;
}