import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { DefaultBytecodeScope$Members } from '../../../../../com/oracle/truffle/api/bytecode/DefaultBytecodeScope$Members.d.ts'
import type { DefaultBytecodeScope$NameToIndexCache } from '../../../../../com/oracle/truffle/api/bytecode/DefaultBytecodeScope$NameToIndexCache.d.ts'
import type { TagTreeNode } from '../../../../../com/oracle/truffle/api/bytecode/TagTreeNode.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultBytecodeScope extends Object implements TruffleObject {
    constructor(node: TagTreeNode, frame: Frame, nodeEnter: boolean)
    // private bci: number;
    // private bytecode: BytecodeNode;
    // private cache: DefaultBytecodeScope$NameToIndexCache;
    // private frame: Frame;
    // private node: TagTreeNode;
    accepts(cachedBytecode: BytecodeNode, cachedNode: TagTreeNode, cachedBci: number, cache: DefaultBytecodeScope$NameToIndexCache): boolean;
    // private createMembers(): DefaultBytecodeScope$Members;
    createNameToIndex(): { [key: string]: number };
    getCache(): DefaultBytecodeScope$NameToIndexCache;
    getLanguage(cachedNode: TagTreeNode): Class<TruffleLanguage<Object>>;
    getMembers(includeInternal: boolean): Object;
    getSourceLocation(): SourceSection;
    hasLanguage(): boolean;
    hasMembers(): boolean;
    hasSourceLocation(): boolean;
    isMemberInsertable(member: string): boolean;
    isScope(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}