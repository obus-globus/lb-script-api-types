import type { TextNode } from '../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MarkdownLiteParserV1$SubNodeType<T extends Object | number | string | boolean> extends Record {
    static BACK_TICK: MarkdownLiteParserV1$SubNodeType<string>;
    static BRACKET_CLOSE: MarkdownLiteParserV1$SubNodeType<string>;
    static BRACKET_OPEN: MarkdownLiteParserV1$SubNodeType<string>;
    static DOUBLE_FLOOR: MarkdownLiteParserV1$SubNodeType<string>;
    static DOUBLE_STAR: MarkdownLiteParserV1$SubNodeType<string>;
    static DOUBLE_WAVY_LINE: MarkdownLiteParserV1$SubNodeType<string>;
    static FLOOR: MarkdownLiteParserV1$SubNodeType<string>;
    static SPOILER_LINE: MarkdownLiteParserV1$SubNodeType<string>;
    static SQR_BRACKET_CLOSE: MarkdownLiteParserV1$SubNodeType<string>;
    static SQR_BRACKET_OPEN: MarkdownLiteParserV1$SubNodeType<string>;
    static STAR: MarkdownLiteParserV1$SubNodeType<string>;
    static STRING: MarkdownLiteParserV1$SubNodeType<string>;
    static TEXT_NODE: MarkdownLiteParserV1$SubNodeType<TextNode>;
    private constructor(selfValue: T)
    // private selfValue: T;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    selfValue(): T;
    toString(): string;
}