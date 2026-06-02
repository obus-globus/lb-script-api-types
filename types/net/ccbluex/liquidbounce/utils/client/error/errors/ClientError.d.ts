import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
export class ClientError extends RuntimeException {
    constructor(message: string, needToReport: boolean)
    readonly needToReport: boolean;
}