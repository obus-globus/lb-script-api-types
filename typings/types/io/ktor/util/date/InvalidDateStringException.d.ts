import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
export class InvalidDateStringException extends IllegalStateException {
    constructor(data: string, at: number, pattern: string)
}