import type { MarkdownLiteParserV1$SubNodeType } from '../../../../../eu/pb4/placeholders/api/parsers/MarkdownLiteParserV1$SubNodeType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MarkdownLiteParserV1$SubNode<T extends Object | number | string | boolean> extends Record {
    private constructor(type: MarkdownLiteParserV1$SubNodeType<T>, value: T)
    // private type: MarkdownLiteParserV1$SubNodeType<T>;
    // private value: T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MarkdownLiteParserV1$SubNodeType<T>;
    value(): T;
}