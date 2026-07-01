import type { ParseException } from '../../../kroppeb/stareval/exception/ParseException.d.ts'
export class UnexpectedCharacterException extends ParseException {
    constructor(arg0: string, arg1: string, arg2: number)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: string, arg2: number)
}