import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Error } from '../java/lang/Error.d.ts'
export class NotImplementedError extends Error implements Serializable {
    constructor(message?: string)
}