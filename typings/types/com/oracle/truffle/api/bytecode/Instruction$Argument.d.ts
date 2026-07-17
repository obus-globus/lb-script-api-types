import type { Instruction$Argument$BranchProfile } from '../../../../../com/oracle/truffle/api/bytecode/Instruction$Argument$BranchProfile.d.ts'
import type { Instruction$Argument$Kind } from '../../../../../com/oracle/truffle/api/bytecode/Instruction$Argument$Kind.d.ts'
import type { InstructionDescriptor$ArgumentDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/InstructionDescriptor$ArgumentDescriptor.d.ts'
import type { TagTreeNode } from '../../../../../com/oracle/truffle/api/bytecode/TagTreeNode.d.ts'
import type { Introspection$SpecializationInfo } from '../../../../../com/oracle/truffle/api/dsl/Introspection$SpecializationInfo.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Instruction$Argument extends Object {
    constructor(token: Object)
    asBranchProfile(): Instruction$Argument$BranchProfile;
    asBytecodeIndex(): number;
    asCachedNode(): Node;
    asConstant(): Object;
    asInteger(): number;
    asLocalIndex(): number;
    asLocalOffset(): number;
    asTagNode(): TagTreeNode;
    getDescriptor(): InstructionDescriptor$ArgumentDescriptor;
    getKind(): Instruction$Argument$Kind;
    getName(): string;
    getSpecializationInfo(): Introspection$SpecializationInfo[];
    getSpecializationInfoInternal(): Introspection$SpecializationInfo[];
    // private printNodeProfile(o: Object): string;
    toString(): string;
    // private unsupported(): RuntimeException;
}