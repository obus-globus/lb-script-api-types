import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HostToGuestRootNode } from '../../../../com/oracle/truffle/polyglot/HostToGuestRootNode.d.ts'
import type { PolyglotValueDispatch$InteropValue } from '../../../../com/oracle/truffle/polyglot/PolyglotValueDispatch$InteropValue.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl.d.ts'
export abstract class PolyglotValueDispatch$InteropNode extends HostToGuestRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(polyglot: PolyglotValueDispatch$InteropValue)
    // private polyglot: PolyglotValueDispatch$InteropValue;
    getArgumentTypes(): Class<Object>[];
    getImpl(): AbstractPolyglotImpl;
    getName(): string;
    getOperationName(): string;
    getReceiverType(): Class<Object>;
    toString(): string;
}