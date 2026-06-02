import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeLibUtil$TypeLibDoc extends Object {
    constructor(arg0: string, arg1: string, arg2: number, arg3: string)
    readonly docString: string;
    readonly helpContext: number;
    readonly helpFile: string;
    readonly name: string;
    getDocString(): string;
    getHelpContext(): number;
    getHelpFile(): string;
    getName(): string;
}