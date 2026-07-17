import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObject$ContainsKeyNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$ContainsKeyNode.d.ts'
import type { DynamicObject$GetNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { DynamicObject$PutConstantNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutConstantNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { DynamicObject$RemoveKeyNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$RemoveKeyNode.d.ts'
import type { DynamicObject$SetPropertyFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObject$SetPropertyFlagsNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Properties extends Object {
    static containsKey(paramcontainsKeyNode: DynamicObject$ContainsKeyNode, paramobj: DynamicObject, paramkey: Object): boolean;
    static containsKeyUncached(paramobj: DynamicObject, paramkey: Object): boolean;
    static getOrDefault(paramgetNode: DynamicObject$GetNode, paramobj: DynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getOrDefaultUncached(paramobj: DynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getPropertyFlags(paramgetPropertyFlags: DynamicObject$GetPropertyFlagsNode, paramobj: DynamicObject, paramkey: Object, paramdefaultValue: number): number;
    static getPropertyFlagsUncached(paramobj: DynamicObject, paramkey: Object, paramdefaultValue: number): number;
    static put(paramputNode: DynamicObject$PutNode, paramobj: DynamicObject, paramkey: Object, paramvalue: Object): void;
    static putConstant(paramputConstantNode: DynamicObject$PutConstantNode, paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putConstantUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putIfPresent(paramputNode: DynamicObject$PutNode, paramobj: DynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static putIfPresentUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static putUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object): void;
    static putWithFlags(paramputNode: DynamicObject$PutNode, paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putWithFlagsUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static removeKey(paramremoveKeyNode: DynamicObject$RemoveKeyNode, paramobj: DynamicObject, paramkey: Object): boolean;
    static removeKeyUncached(paramobj: DynamicObject, paramkey: Object): boolean;
    static setPropertyFlags(paramsetPropertyFlagsNode: DynamicObject$SetPropertyFlagsNode, paramobj: DynamicObject, paramkey: Object, paramflags: number): boolean;
    static setPropertyFlagsUncached(paramobj: DynamicObject, paramkey: Object, paramflags: number): boolean;
    private constructor()
}