import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$ArrayReadElementCacheDispatchNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$ArrayReadElementCacheDispatchNode.d.ts'
import type { ReadElementNode$JSObjectReadElementNonArrayTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$JSObjectReadElementNonArrayTypeCacheNode.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$JSObjectReadElementTypeCacheNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private fromLongNode: TruffleString$FromLongNode;
    // private isArrayNode: IsArrayNode;
    // private jsclassProfile: JSClassProfile;
    // private nonArrayCaseNode: ReadElementNode$JSObjectReadElementNonArrayTypeCacheNode;
    // private toArrayIndexNode: ToArrayIndexNode;
    doLongIndex(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): Object;
    doLongIndexAsDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): number;
    doLongIndexAsInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): number;
    doObjectIndex(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): Object;
    doObjectIndexAsDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): number;
    doObjectIndexAsInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean, arrayDispatch: ReadElementNode$ArrayReadElementCacheDispatchNode, arrayIf: InlinedConditionProfile, arrayIndexIf: InlinedConditionProfile): number;
    executeJSObjectGet(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeJSObjectGet(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): Object;
    executeJSObjectGet(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    executeJSObjectGet(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): Object;
    executeJSObjectGetDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeJSObjectGetDouble(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeJSObjectGetDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeJSObjectGetDouble(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeJSObjectGetInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeJSObjectGetInt(target: Object, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    executeJSObjectGetInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode): number;
    executeJSObjectGetInt(target: Object, index: number, receiver: Object, defaultValue: Object, root: ReadElementNode, indexIsLong: boolean): number;
    // private getNonArrayNode(): ReadElementNode$JSObjectReadElementNonArrayTypeCacheNode;
    // private getProperty(targetObject: JSDynamicObject, objIndex: Object, receiver: Object, defaultValue: Object): Object;
    // private initFromLongNode(): TruffleString$FromLongNode;
    // private initToArrayIndexNode(): ToArrayIndexNode;
    // private isArray(target: Object): boolean;
    // private readNonArrayObjectIndex(targetObject: JSDynamicObject, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
    // private stringFromLong(index: number): TruffleString;
    // private toArrayIndex(index: Object): Object;
}