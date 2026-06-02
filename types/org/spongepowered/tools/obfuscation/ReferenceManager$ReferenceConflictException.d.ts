import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
export class ReferenceManager$ReferenceConflictException extends RuntimeException {
    constructor(arg0: string, arg1: string)
    // private newReference: string;
    // private oldReference: string;
    getNew(): string;
    getOld(): string;
}