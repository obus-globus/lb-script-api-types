import type { IllegalStateException } from '../../../java/lang/IllegalStateException.d.ts'
export class CancellationException extends IllegalStateException {
    constructor()
    constructor(arg0: string)
    constructor(arg0: string, arg1: CancellationException)
}