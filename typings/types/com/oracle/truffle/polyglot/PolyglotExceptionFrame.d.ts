import type { PolyglotExceptionImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotExceptionImpl.d.ts'
import type { PolyglotLanguage } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguage.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$AbstractStackFrameImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractStackFrameImpl.d.ts'
export class PolyglotExceptionFrame extends AbstractPolyglotImpl$AbstractStackFrameImpl {
    private constructor(source: PolyglotExceptionImpl, language: PolyglotLanguage, sourceLocation: Object, rootName: string, executableName: string, metaQualifiedName: string, isHost: boolean, stackTrace: StackTraceElement, bytecodeIndex: number)
    readonly bytecodeIndex: number;
    // private executableName: string;
    // private formattedSource: string;
    // private host: boolean;
    readonly language: PolyglotLanguage;
    // private metaQualifiedName: string;
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