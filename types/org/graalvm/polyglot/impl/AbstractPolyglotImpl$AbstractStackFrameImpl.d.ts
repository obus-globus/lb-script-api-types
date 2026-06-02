import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
import type { AbstractPolyglotImpl$AbstractDispatchClass } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractDispatchClass.d.ts'
export abstract class AbstractPolyglotImpl$AbstractStackFrameImpl extends AbstractPolyglotImpl$AbstractDispatchClass {
    constructor()
    constructor(engineImpl: AbstractPolyglotImpl)
    getBytecodeIndex(): number;
    getLanguage(): Object;
    getRootName(): string;
    getSourceLocation(): Object;
    isHostFrame(): boolean;
    toHostFrame(): StackTraceElement;
    toStringImpl(languageColumn: number): string;
}