import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayLengthNode$ArrayLengthWriteNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthWriteNode.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
export abstract class ArrayLengthNode$SetArrayLengthNode extends ArrayLengthNode$ArrayLengthWriteNode {
    static create(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static createSetOrDelete(paramstrict: boolean): ArrayLengthNode$ArrayLengthWriteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(strict: boolean)
    // private strict: boolean;
    doCached(arrayObj: JSArrayObject, length: number, node: Node, arrayType: ScriptArray, setLengthProfile: ScriptArray$SetLengthProfileAccess): void;
    doGeneric(arrayObj: JSArrayObject, length: number, sealedProfile: InlinedConditionProfile, setLengthProfile: ScriptArray$SetLengthProfileAccess): void;
    // private setLengthSealed(arrayObj: JSArrayObject, length: number, arrayType: ScriptArray, node: Node, setLengthProfile: ScriptArray$SetLengthProfileAccess): void;
}