import type { SlowPathException } from '../../../../../com/oracle/truffle/api/nodes/SlowPathException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnexpectedResultException extends SlowPathException {
    constructor(result: Object)
    readonly result: Object;
    getResult(): Object;
}