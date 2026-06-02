import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessHandler$Redirect$Type } from '../../../../org/graalvm/polyglot/io/ProcessHandler$Redirect$Type.d.ts'
export class ProcessHandler$Redirect extends Object {
    static INHERIT: ProcessHandler$Redirect;
    static PIPE: ProcessHandler$Redirect;
    static createRedirectToStream(paramstream: OutputStream): ProcessHandler$Redirect;
    constructor(type: ProcessHandler$Redirect$Type, stream: OutputStream)
    // private stream: OutputStream;
    // private type: ProcessHandler$Redirect$Type;
    equals(obj: Object | null): boolean;
    getOutputStream(): OutputStream;
    hashCode(): number;
    toString(): string;
}