import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class StringifiedTagParseException extends RuntimeException {
    constructor(arg0: string, arg1: number)
    readonly message: string | null;
    readonly position: number;
    getPosition(): number;
}