import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
export class StoreConfigurationException extends Exception {
    constructor(e: Exception)
    constructor(message: string)
    constructor(message: string, e: Exception)
}