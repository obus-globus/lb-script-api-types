import type { Object } from '../../../java/lang/Object.d.ts'
export class OSSession extends Object {
    constructor(arg0: string, arg1: string, arg2: number, arg3: string)
    readonly host: string;
    readonly loginTime: number;
    readonly terminalDevice: string;
    readonly userName: string;
    getHost(): string;
    getLoginTime(): number;
    getTerminalDevice(): string;
    getUserName(): string;
    toString(): string;
}