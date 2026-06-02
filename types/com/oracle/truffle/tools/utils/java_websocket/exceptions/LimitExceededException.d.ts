import type { InvalidDataException } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/exceptions/InvalidDataException.d.ts'
export class LimitExceededException extends InvalidDataException {
    constructor()
    constructor(arg0: number)
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    readonly limit: number;
    getLimit(): number;
}