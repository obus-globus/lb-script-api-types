import type { IllegalStateException } from '../../../java/lang/IllegalStateException.d.ts'
export class InvalidCookieDateException extends IllegalStateException {
    constructor(data: string, reason: string)
}