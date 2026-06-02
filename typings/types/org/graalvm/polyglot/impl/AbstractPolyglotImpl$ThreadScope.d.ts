import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
export abstract class AbstractPolyglotImpl$ThreadScope extends Object implements AutoCloseable {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    close(): void;
}