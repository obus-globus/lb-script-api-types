import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleSourceLanguagePosition } from '../../../../com/oracle/truffle/compiler/TruffleSourceLanguagePosition.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AbstractCompilationTask$TruffleSourcePositionImpl extends Object implements TruffleSourceLanguagePosition {
    constructor(section: SourceSection, nodeClass: Class<Object>, nodeId: number)
    // private nodeClass: Class<Object>;
    readonly nodeId: number;
    // private sourceSection: SourceSection;
    getDescription(): string;
    getLanguage(): string;
    getLineNumber(): number;
    getNodeClassName(): string;
    getNodeId(): number;
    getOffsetEnd(): number;
    getOffsetStart(): number;
    getURI(): URI;
}