import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
export interface TextifierSupport extends Object{
    textify(arg0: StringBuilder, arg1: Map<Label, string>): void;
}