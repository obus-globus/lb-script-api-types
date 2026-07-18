import type { InstrumentableNode } from '../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { ExecutableNode } from '../../../../com/oracle/truffle/api/nodes/ExecutableNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RegexLanguage } from '../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { Encodings$Encoding } from '../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class RegexBodyNode extends ExecutableNode implements InstrumentableNode {
    constructor(copy: RegexBodyNode)
    constructor(language: RegexLanguage, source: RegexSource)
    // private language: RegexLanguage;
    readonly source: RegexSource;
    readonly sourceSection: SourceSection;
    createProbe(sourceSection: SourceSection): ProbeNode;
    createWrapper(probe: ProbeNode): InstrumentableNode$WrapperNode;
    findNearestNodeAt(line: number, column: number, tags: Class<Tag>[]): Node;
    findNearestNodeAt(sourceCharIndex: number, tags: Class<Tag>[]): Node;
    findProbe(): ProbeNode;
    getEncoding(): Encodings$Encoding;
    getEngineLabel(): string;
    getNodeObject(): Object;
    getRegexLanguage(): RegexLanguage;
    getSource(): RegexSource;
    getSourceSection(): SourceSection;
    hasTag(tag: Class<Tag>): boolean;
    isBooleanMatch(): boolean;
    isInstrumentable(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    toString(): string;
}