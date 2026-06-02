import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { BytecodeNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeNode.d.ts'
import type { TagTree } from '../../../../../com/oracle/truffle/api/bytecode/TagTree.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TagTreeNode extends Node implements TagTree {
    constructor(token: Object)
    createDefaultScope(frame: Frame, nodeEnter: boolean): Object;
    dispatch(): Class<Object>;
    getBytecodeNode(): BytecodeNode;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getTagsString(): string;
    toString(): string;
}