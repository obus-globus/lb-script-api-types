import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ObjectPrinter$ConverterFunction } from '../../../../net/lenni0451/reflect/utils/ObjectPrinter$ConverterFunction.d.ts'
export class ObjectPrinter$Converter extends Object {
    private constructor(arg0: (param0: Class<Object>) => kotlin.Boolean, arg1: (param0: Object, param1: StringBuilder, param2: (param0: Object) => string, param3: boolean) => void)
    // private converter: (param0: Object, param1: StringBuilder, param2: (param0: Object) => string, param3: boolean) => void;
    // private filter: (param0: Class<Object>) => kotlin.Boolean;
}