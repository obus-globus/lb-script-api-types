import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { StackTraceEntry } from '../../../../../com/oracle/truffle/tools/profiler/StackTraceEntry.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ProfilerNode<T extends unknown> extends Object {
    constructor()
    constructor(parent: ProfilerNode<T>, sourceLocation: StackTraceEntry, payload: T)
    children: Map<StackTraceEntry, ProfilerNode<T>>;
    readonly parent: ProfilerNode<T>;
    readonly payload: T;
    // private sourceLocation: StackTraceEntry;
    addChild(childLocation: StackTraceEntry, child: ProfilerNode<T>): void;
    deepCopyChildrenFrom(node: ProfilerNode<T>, copyPayload: (param0: T) => T): void;
    deepMergeChildrenFrom(node: ProfilerNode<T>, mergePayload: (param0: T, param1: T) => void, payloadFactory: () => T): void;
    deepMergeNodeToChildren(node: ProfilerNode<T>, mergePayload: (param0: T, param1: T) => void, payloadFactory: () => T): void;
    // private findBySourceLocation(targetSourceLocation: StackTraceEntry): ProfilerNode<T>;
    findChild(childLocation: StackTraceEntry): ProfilerNode<T>;
    getChildren(): ProfilerNode<T>[];
    getParent(): ProfilerNode<T>;
    getPayload(): T;
    getRootName(): string;
    getSourceLocation(): StackTraceEntry;
    getSourceSection(): SourceSection;
    getTags(): Class<Object>[];
    isRecursive(): boolean;
    // private isRecursiveImpl(source: ProfilerNode<T>): boolean;
}