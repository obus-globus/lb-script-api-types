import type { PolyglotExceptionImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl.d.ts'
import type { PolyglotImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Language } from '../../../../org/graalvm/polyglot/Language.d.ts'
import type { AbstractPolyglotImpl$AbstractStackFrameImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractStackFrameImpl.d.ts'
export class PolyglotExceptionFrame extends AbstractPolyglotImpl$AbstractStackFrameImpl {
    private constructor(source: PolyglotExceptionImpl, languageId: string, language: Language, sourceLocation: Object, rootName: string, executableName: string, metaQualifiedName: string, isHost: boolean, stackTrace: StackTraceElement, bytecodeIndex: number)
    readonly bytecodeIndex: number;
    // private executableName: string;
    // private formattedSource: string;
    // private host: boolean;
    readonly language: Language;
    // private languageId: string;
    // private metaQualifiedName: string;
    // private polyglot: PolyglotImpl;
    readonly rootName: string;
    readonly sourceLocation: Object;
    // private stackTrace: StackTraceElement;
    getBytecodeIndex(): number;
    getLanguage(): Object;
    getRootName(): string;
    getSourceLocation(): Object;
    isHostFrame(): boolean;
    toHostFrame(): StackTraceElement;
    toStringImpl(langColumn: number): string;
}