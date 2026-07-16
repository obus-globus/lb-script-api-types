import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { PublicKey } from '../../../../java/security/PublicKey.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
export class AbstractPublicJwk<K extends PublicKey> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static IMMUTABLE_MSG: string;
    static KID: Parameter<string>;
    static X5C: Parameter<X509Certificate[]>;
    static X5T: Parameter<number[]>;
    static X5T_S256: Parameter<number[]>;
    static X5U: Parameter<URI>;
}