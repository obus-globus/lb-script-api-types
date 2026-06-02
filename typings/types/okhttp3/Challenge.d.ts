import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Challenge extends Object {
    constructor(scheme: string, realm: string)
    constructor(scheme: string, authParams: Map<string | null, string>)
    // private authParams: Map<string | null, string>;
    authParams(): Map<string | null, string>;
    charset(): Charset;
    realm(): string | null;
    // private scheme: string;
    scheme(): string;
    authParams(): Map<string | null, string>;
    charset(): Charset;
    equals(other: Object | null): boolean;
    hashCode(): number;
    realm(): string | null;
    scheme(): string;
    toString(): string;
    withCharset(charset: Charset): Challenge;
}