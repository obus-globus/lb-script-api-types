import type { JavaMap } from '../JavaMap.d.ts'
import type { Charset } from '../java/nio/charset/Charset.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Challenge extends Object {
    constructor(scheme: string, realm: string)
    constructor(scheme: string, authParams: JavaMap<string | null, string>)
    // private authParams: JavaMap<string | null, string>;
    authParams(): JavaMap<string | null, string>;
    charset(): Charset;
    realm(): string | null;
    // private scheme: string;
    scheme(): string;
    authParams(): JavaMap<string | null, string>;
    charset(): Charset;
    equals(other: Object | null): boolean;
    hashCode(): number;
    realm(): string | null;
    scheme(): string;
    toString(): string;
    withCharset(charset: Charset): Challenge;
}