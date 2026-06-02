import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class Exception extends Throwable {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: string, arg1: Throwable, arg2: boolean, arg3: boolean)
    constructor(arg0: Throwable)
}