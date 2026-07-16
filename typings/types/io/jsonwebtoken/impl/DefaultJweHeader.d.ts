import type { Parameter } from '../../../io/jsonwebtoken/impl/lang/Parameter.d.ts'
export class DefaultJweHeader {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ALGORITHM: string;
    static COMPRESSION_ALGORITHM: string;
    static CONTENT_TYPE: string;
    static DEPRECATED_COMPRESSION_ALGORITHM: string;
    static EPK: Parameter<{ [key: string]: any }>;
    static IV: Parameter<number[]>;
    static JWT_TYPE: string;
    static P2C: Parameter<number>;
    static P2S: Parameter<number[]>;
    static TAG: Parameter<number[]>;
    static TYPE: string;
}