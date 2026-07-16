import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class ThrowableFormatOptions extends Object {
    static CLASS_NAME: string;
    static FILE_NAME: string;
    static LINE_NUMBER: string;
    static LOCALIZED_MESSAGE: string;
    static MESSAGE: string;
    static METHOD_NAME: string;
    static newInstance(paramoptions: string[]): ThrowableFormatOptions;
    constructor()
    constructor(lines: number, separator: string, ignorePackages: string[], textRenderer: TextRenderer, suffix: string)
    constructor(packages: string[])
    readonly ignorePackages: string[];
    readonly lines: number;
    readonly separator: string;
    readonly suffix: string;
    readonly textRenderer: TextRenderer;
    allLines(): boolean;
    anyLines(): boolean;
    getIgnorePackages(): string[];
    getLines(): number;
    getSeparator(): string;
    getSuffix(): string;
    getTextRenderer(): TextRenderer;
    hasPackages(): boolean;
    minLines(maxLines: number): number;
    toString(): string;
}