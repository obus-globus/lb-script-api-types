import type { Params } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Params.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Command extends Object {
    static ID: string;
    static METHOD: string;
    static PARAMS: string;
    constructor(id: number, method: string, params: Params)
    constructor(jsonStr: string)
    readonly id: number;
    readonly method: string;
    readonly params: Params;
    getId(): number;
    getMethod(): string;
    getParams(): Params;
}