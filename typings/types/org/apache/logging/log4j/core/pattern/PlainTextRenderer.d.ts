import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class PlainTextRenderer extends Object implements TextRenderer {
    static getInstance(): PlainTextRenderer;
    constructor()
    render(input: StringBuilder, output: StringBuilder): void;
    render(input: string, output: StringBuilder, styleName: string): void;
}