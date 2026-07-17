import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractSourceDispatch } from '../../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractSourceDispatch.d.ts'
export abstract class ForeignSourceDispatch extends AbstractPolyglotImpl$AbstractSourceDispatch {
    constructor(polyglot: AbstractPolyglotImpl)
    equals(impl: Object, otherImpl: Object): boolean;
    equals(other: Object | null): boolean;
    getInputStream(impl: Object): InputStream;
    getReader(impl: Object): Reader;
}