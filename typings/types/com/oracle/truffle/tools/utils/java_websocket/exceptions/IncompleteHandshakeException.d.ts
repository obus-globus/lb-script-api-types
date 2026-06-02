import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
export class IncompleteHandshakeException extends RuntimeException {
    constructor()
    constructor(arg0: number)
    readonly preferredSize: number;
    getPreferredSize(): number;
}