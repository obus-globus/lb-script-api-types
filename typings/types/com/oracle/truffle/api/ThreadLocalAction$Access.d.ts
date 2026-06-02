import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
export abstract class ThreadLocalAction$Access extends Object {
    constructor(secret: Object)
    constructor(secret: AbstractPolyglotImpl)
    getLocation(): Node;
    getThread(): Thread;
}