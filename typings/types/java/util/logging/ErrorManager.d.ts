import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ErrorManager extends Object {
    static CLOSE_FAILURE: number;
    static FLUSH_FAILURE: number;
    static FORMAT_FAILURE: number;
    static GENERIC_FAILURE: number;
    static OPEN_FAILURE: number;
    static WRITE_FAILURE: number;
    constructor()
    // private reported: boolean;
    error(arg0: string, arg1: Exception, arg2: number): void;
}