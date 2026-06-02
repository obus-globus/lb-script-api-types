import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Language } from '../../../org/graalvm/polyglot/Language.d.ts'
import type { SourceSection } from '../../../org/graalvm/polyglot/SourceSection.d.ts'
import type { AbstractPolyglotImpl$AbstractStackFrameImpl } from '../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$AbstractStackFrameImpl.d.ts'
export class PolyglotException$StackFrame extends Object {
    constructor(null_: PolyglotException$StackFrame, impl: AbstractPolyglotImpl$AbstractStackFrameImpl)
    // private impl: AbstractPolyglotImpl$AbstractStackFrameImpl;
    getBytecodeIndex(): number;
    getLanguage(): Language;
    getRootName(): string;
    getSourceLocation(): SourceSection;
    isGuestFrame(): boolean;
    isHostFrame(): boolean;
    toHostFrame(): StackTraceElement;
    toString(): string;
}