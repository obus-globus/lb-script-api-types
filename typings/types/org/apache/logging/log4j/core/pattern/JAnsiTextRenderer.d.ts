import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class JAnsiTextRenderer extends Object implements TextRenderer {
    static DefaultExceptionStyleMap: { [key: string]: string };
    constructor(formats: string[], defaultStyleMap: { [key: string]: string })
    // private beginToken: string;
    // private beginTokenLen: number;
    // private endToken: string;
    // private endTokenLen: number;
    readonly styleMap: { [key: string]: string };
    getStyleMap(): { [key: string]: string };
    render(input: StringBuilder, output: StringBuilder): void;
    // private render(input: string, output: StringBuilder, ...styleNames: string[]): void;
    render(input: string, output: StringBuilder, styleName: string): void;
    toString(): string;
}