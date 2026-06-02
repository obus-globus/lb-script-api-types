import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentType extends Object {
    static parse(paramarg0: string): ContentType;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: Charset, arg2: string)
    constructor(arg0: string, arg1: string)
    readonly boundary: string;
    readonly charset: Charset;
    readonly mimeType: string;
    equals(arg0: Object | null): boolean;
    getBoundary(): Optional<string>;
    getCharset(): Optional<Charset>;
    getMimeType(): string;
    hashCode(): number;
    toString(): string;
}