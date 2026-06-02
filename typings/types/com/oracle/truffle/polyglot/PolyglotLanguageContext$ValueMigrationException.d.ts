import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
export class PolyglotLanguageContext$ValueMigrationException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    constructor(message: string, location: Node)
}