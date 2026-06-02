import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TextRenderer extends Object{
    render(input: StringBuilder, output: StringBuilder): void;
    render(input: string, output: StringBuilder, styleName: string): void;
}