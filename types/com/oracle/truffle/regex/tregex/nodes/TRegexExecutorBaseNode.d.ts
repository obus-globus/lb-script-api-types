import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexExecutorBaseNode extends Node implements InstrumentableNode {
    static findInstrumentableParent(paramnode: Node): Node;
    constructor()
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    createProbe(sourceSection: SourceSection): ProbeNode;
    createWrapper(probeNode: ProbeNode): InstrumentableNode$WrapperNode;
    execute(frame: VirtualFrame, locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    findNearestNodeAt(line: number, column: number, tags: Class<Tag>[]): Node;
    findNearestNodeAt(sourceCharIndex: number, tags: Class<Tag>[]): Node;
    findProbe(): ProbeNode;
    getEncoding(): Encodings$Encoding;
    getName(): string;
    getNodeObject(): Object;
    getNumberOfStates(): number;
    getNumberOfTransitions(): number;
    getSource(): RegexSource;
    hasTag(tag: Class<Tag>): boolean;
    isBooleanMatch(): boolean;
    isForward(): boolean;
    isInstrumentable(): boolean;
    isSimpleCG(): boolean;
    isTrivial(): boolean;
    isUTF16(): boolean;
    isUTF32(): boolean;
    isUTF8(): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    shallowCopy(): TRegexExecutorNode;
    unwrap(): TRegexExecutorNode;
    writesCaptureGroups(): boolean;
}