import type { Error } from '../../../../../java/lang/Error.d.ts'
export class ExecutionError extends Error {
    constructor()
    constructor(cause: Error)
    constructor(message: string)
    constructor(message: string, cause: Error)
}