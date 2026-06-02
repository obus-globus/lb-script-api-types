import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
export class IncompleteException extends Exception {
    constructor(arg0: number)
    readonly preferredSize: number;
    getPreferredSize(): number;
}