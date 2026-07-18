import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultStackTraceElementObject extends Object implements TruffleObject {
    constructor(rootNode: RootNode, sourceSection: SourceSection)
    // private rootNode: RootNode;
    // private sourceSection: SourceSection;
    getDeclaringMetaObject(): Object;
    getExecutableName(): Object;
    getSourceLocation(): SourceSection;
    hasDeclaringMetaObject(): boolean;
    hasExecutableName(): boolean;
    hasSourceLocation(): boolean;
}