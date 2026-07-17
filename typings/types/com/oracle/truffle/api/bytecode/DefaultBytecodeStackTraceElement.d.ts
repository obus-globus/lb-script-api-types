import type { TruffleStackTraceElement } from '../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultBytecodeStackTraceElement extends Object implements TruffleObject {
    constructor(stackTraceElement: TruffleStackTraceElement)
    // private stackTrace: TruffleStackTraceElement;
    getBytecodeIndex(): number;
    getDeclaringMetaObject(): Object;
    getExecutableName(): Object;
    // private getExecutableNameImpl(): string;
    getLanguageId(): string;
    getSourceLocation(): SourceSection;
    // private getSourceSectionImpl(): SourceSection;
    hasBytecodeIndex(): boolean;
    hasDeclaringMetaObject(): boolean;
    hasExecutableName(): boolean;
    hasLanguageId(): boolean;
    hasSourceLocation(): boolean;
    isInternal(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}