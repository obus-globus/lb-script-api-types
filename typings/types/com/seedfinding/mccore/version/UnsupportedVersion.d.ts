import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class UnsupportedVersion extends RuntimeException {
    constructor(arg0: MCVersion, arg1: string)
}