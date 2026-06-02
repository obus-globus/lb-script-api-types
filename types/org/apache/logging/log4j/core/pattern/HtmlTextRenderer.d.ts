import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class HtmlTextRenderer extends Object implements TextRenderer {
    constructor(formats: string[])
    render(input: StringBuilder, output: StringBuilder): void;
    render(input: string, output: StringBuilder, styleName: string): void;
}