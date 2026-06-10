import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { ExecutionEventNode } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNode.d.ts'
import type { ExecutionEventNodeFactory } from '../../../../../com/oracle/truffle/api/instrumentation/ExecutionEventNodeFactory.d.ts'
import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class EventContext extends Object {
    constructor(probeNode: ProbeNode, sourceSection: SourceSection)
    readonly nodeObject: Object;
    // private probeNode: ProbeNode;
    // private sourceSection: SourceSection;
    createError(e: RuntimeException): RuntimeException;
    createUnwind(info: Object): ThreadDeath;
    createUnwind(info: Object, unwindBinding: EventBinding<Object>): ThreadDeath;
    getInstrumentedNode(): Node;
    getInstrumentedSourceSection(): SourceSection;
    getNodeObject(): Object;
    getProbeNode(): ProbeNode;
    hasTag(tag: Class<Tag>): boolean;
    isLanguageContextInitialized(): boolean;
    // private isValidNodeObject(obj: Object): boolean;
    // private isValidTaggedNodeObject(obj: Object): boolean;
    lookupExecutionEventNode(binding: EventBinding<ExecutionEventNodeFactory>): ExecutionEventNode;
    lookupExecutionEventNodes(bindings: EventBinding<ExecutionEventNodeFactory>[]): Iterator<ExecutionEventNode>;
    toString(): string;
    validEventContextOnLazyUpdate(): boolean;
    validEventContextOnWrapperInsert(): boolean;
}