import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceSectionDispatch } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceSectionDispatch.d.ts'
export abstract class ForeignSourceSectionDispatch extends AbstractPolyglotImpl$AbstractSourceSectionDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    equals(impl: Object, obj: Object): boolean;
    equals(other: Object | null): boolean;
}