import type { Exception } from '../../../java/lang/Exception.d.ts'
export class CefDevToolsClient$DevToolsException extends Exception {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private json_: string;
    readonly message: string | null;
    getJson(): string;
}