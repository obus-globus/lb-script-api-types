import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
export class UnsafeHeaderException extends IllegalArgumentException {
    constructor(header: string)
}