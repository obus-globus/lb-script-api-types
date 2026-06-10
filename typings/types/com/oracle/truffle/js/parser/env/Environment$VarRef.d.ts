import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { UnaryOperator } from '../../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Environment$VarRef extends Object {
    constructor(name: Object)
    readonly name: Object;
    createCompoundAssignNode(): Pair<() => JavaScriptNode, (param0: JavaScriptNode) => Object | null>;
    createDeleteNode(): JavaScriptNode;
    createReadNode(): JavaScriptNode;
    createWriteNode(rhs: JavaScriptNode): JavaScriptNode;
    getFrameSlot(): JSFrameSlot;
    getName(): TruffleString;
    hasBeenDeclared(): boolean;
    hasTDZCheck(): boolean;
    isConst(): boolean;
    isFrameVar(): boolean;
    isFunctionLocal(): boolean;
    isGlobal(): boolean;
    setHasBeenDeclared(declared: boolean): void;
    toString(): string;
    withRequired(required: boolean): Environment$VarRef;
    withTDZCheck(): Environment$VarRef;
}