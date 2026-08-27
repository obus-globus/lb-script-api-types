import type { SSLException } from '../../../javax/net/ssl/SSLException.d.ts'
export class EchUntrustedException extends SSLException {
    constructor(message: string, cause: SSLException)
}