import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostExecuteNode$TypeCheckNode } from '../../../../com/oracle/truffle/host/HostExecuteNode$TypeCheckNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostExecuteNode$PrimitiveType extends HostExecuteNode$TypeCheckNode {
    constructor(targetType: Class<Object>, otherTypes: Class<Object>[], priority: number)
    // private otherTypes: Class<Object>[];
    // private priority: number;
    // private targetType: Class<Object>;
    equals(obj: Object | null): boolean;
    execute(value: Object, interop: InteropLibrary, context: HostContext): boolean;
    hashCode(): number;
    toString(): string;
}