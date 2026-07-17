import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
export interface ASMifierSupport extends Object{
    asmify(arg0: StringBuilder, arg1: string, arg2: JavaMap<Label, string>): void;
}