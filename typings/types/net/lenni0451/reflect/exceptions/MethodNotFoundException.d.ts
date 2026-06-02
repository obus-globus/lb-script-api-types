import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MethodNotFoundException extends RuntimeException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Class<Object>[])
    constructor(arg0: string, arg1: string, arg2: string[])
}