import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MarkdownLiteParserV1$MarkdownFormat extends Enum<MarkdownLiteParserV1$MarkdownFormat> {
    static BOLD: MarkdownLiteParserV1$MarkdownFormat;
    static ITALIC: MarkdownLiteParserV1$MarkdownFormat;
    static QUOTE: MarkdownLiteParserV1$MarkdownFormat;
    static SPOILER: MarkdownLiteParserV1$MarkdownFormat;
    static STRIKETHROUGH: MarkdownLiteParserV1$MarkdownFormat;
    static UNDERLINE: MarkdownLiteParserV1$MarkdownFormat;
    static URL: MarkdownLiteParserV1$MarkdownFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MarkdownLiteParserV1$MarkdownFormat;
    static values(): (Object | null)[];
    private constructor()
    name(): "BOLD" | "ITALIC" | "UNDERLINE" | "STRIKETHROUGH" | "QUOTE" | "SPOILER" | "URL";
}