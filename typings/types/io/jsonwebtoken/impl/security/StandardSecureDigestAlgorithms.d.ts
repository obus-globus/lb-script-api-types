import type { Identifiable } from '../../../../io/jsonwebtoken/Identifiable.d.ts'
import type { Function } from '../../../../io/jsonwebtoken/impl/lang/Function.d.ts'
import type { SecureDigestAlgorithm } from '../../../../io/jsonwebtoken/security/SecureDigestAlgorithm.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export class StandardSecureDigestAlgorithms {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static FN: Function<Identifiable, string>;
    static NAME: string;
    static findBySigningKey<K extends Key>(paramarg0: K): SecureDigestAlgorithm<K, any>;
    static fn<T extends Identifiable>(): Function<T, string>;
}