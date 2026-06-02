import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectPrinter$ConverterFunction extends Object{
    convert(arg0: Object, arg1: StringBuilder, arg2: (param0: Object) => string, arg3: boolean): void;
}