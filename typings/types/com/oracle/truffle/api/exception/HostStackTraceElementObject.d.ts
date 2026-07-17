import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HostStackTraceElementObject extends Object implements TruffleObject {
    constructor(stackTraceElement: StackTraceElement)
    // private stackTraceElement: StackTraceElement;
    asHostObject(): Object;
    getDeclaringMetaObject(): Object;
    getExecutableName(): Object;
    getSourceLocation(): SourceSection;
    hasDeclaringMetaObject(): boolean;
    hasExecutableName(): boolean;
    hasSourceLocation(): boolean;
    isHostObject(): boolean;
    toString(): string;
}