import type { Parameter } from '../../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
export class DefaultSecretJwk {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static IMMUTABLE_MSG: string;
    static KID: Parameter<string>;
}