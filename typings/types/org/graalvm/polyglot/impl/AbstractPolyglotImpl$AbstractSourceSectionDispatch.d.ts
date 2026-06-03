import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractSourceSectionDispatch extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    equals(impl: Object, obj: Object): boolean;
    equals(other: Object | null): boolean;
    getCharEndIndex(impl: Object): number;
    getCharIndex(impl: Object): number;
    getCharLength(impl: Object): number;
    getCode(impl: Object): CharSequence;
    getEndColumn(impl: Object): number;
    getEndLine(impl: Object): number;
    getStartColumn(impl: Object): number;
    getStartLine(impl: Object): number;
    hasCharIndex(impl: Object): boolean;
    hasColumns(impl: Object): boolean;
    hasLines(impl: Object): boolean;
    hashCode(): number;
    hashCode(impl: Object): number;
    isAvailable(impl: Object): boolean;
    toString(): string;
    toString(impl: Object): string;
}