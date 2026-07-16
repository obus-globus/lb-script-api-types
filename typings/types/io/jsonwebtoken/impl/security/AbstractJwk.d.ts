import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
import type { Key } from '../../../../java/security/Key.d.ts'
export class AbstractJwk<K extends Key> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static IMMUTABLE_MSG: string;
    static KID: Parameter<string>;
}