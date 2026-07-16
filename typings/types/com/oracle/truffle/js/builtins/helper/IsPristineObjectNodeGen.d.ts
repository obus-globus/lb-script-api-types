import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { IsPristineObjectNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/IsPristineObjectNode.d.ts'
import type { IsPristineObjectNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/builtins/helper/IsPristineObjectNodeGen$CachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsPristineObjectNodeGen extends IsPristineObjectNode {
    static create(paramjsClass: JSClass, paraminitialPrototypeShape: Shape, ...parampropertyKeys: Object[]): IsPristineObjectNode;
    static createRegExpExecAndMatch(paramcontext: JSContext): IsPristineObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(jsClass: JSClass, initialPrototypeShape: Shape, ...propertyKeys: Object[])
    // private cached_cache: IsPristineObjectNodeGen$CachedData;
    // private dynamic_assumption0_: Assumption[];
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject): boolean;
    // private executeAndSpecialize(arg0Value: JSDynamicObject): boolean;
    removeCached_(s0_: IsPristineObjectNodeGen$CachedData): void;
    removeDynamic_(): void;
}