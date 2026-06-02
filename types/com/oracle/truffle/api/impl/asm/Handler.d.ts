import type { Label } from '../../../../../../com/oracle/truffle/api/impl/asm/Label.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Handler extends Object {
    constructor(handler: Handler, startPc: Label, endPc: Label)
    constructor(startPc: Label, endPc: Label, handlerPc: Label, catchType: number, catchTypeDescriptor: string)
    // private catchType: number;
    // private catchTypeDescriptor: string;
    // private endPc: Label;
    // private handlerPc: Label;
    // private nextHandler: Handler;
    // private startPc: Label;
}