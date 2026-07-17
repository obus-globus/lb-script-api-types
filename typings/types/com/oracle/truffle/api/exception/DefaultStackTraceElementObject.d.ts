import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultStackTraceElementObject extends Object implements TruffleObject {
    constructor(rootNode: RootNode, sourceSection: SourceSection, byteCodeIndex: number)
    // private byteCodeIndex: number;
    // private rootNode: RootNode;
    // private sourceSection: SourceSection;
    getBytecodeIndex(): number;
    getDeclaringMetaObject(): Object;
    getExecutableName(): Object;
    getLanguageId(): string;
    getSourceLocation(): SourceSection;
    hasBytecodeIndex(): boolean;
    hasDeclaringMetaObject(): boolean;
    hasExecutableName(): boolean;
    hasLanguageId(): boolean;
    hasSourceLocation(): boolean;
    isInternal(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}