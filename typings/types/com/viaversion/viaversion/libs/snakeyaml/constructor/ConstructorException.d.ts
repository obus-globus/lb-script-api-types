import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { MarkedYAMLException } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/MarkedYAMLException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class ConstructorException extends MarkedYAMLException {
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark)
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark, arg4: Throwable)
}