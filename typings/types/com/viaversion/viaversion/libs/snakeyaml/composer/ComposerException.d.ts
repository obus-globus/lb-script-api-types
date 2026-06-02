import type { Mark } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/Mark.d.ts'
import type { MarkedYAMLException } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/error/MarkedYAMLException.d.ts'
export class ComposerException extends MarkedYAMLException {
    constructor(arg0: string, arg1: Mark)
    constructor(arg0: string, arg1: Mark, arg2: string, arg3: Mark)
}