import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibraryImpl$KeyCacheNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheNode.d.ts'
import type { DynamicObjectLibraryImpl$MakeSharedNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$MakeSharedNode.d.ts'
import type { DynamicObjectLibraryImpl$ResetShapeNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$ResetShapeNode.d.ts'
import type { DynamicObjectLibraryImpl$SetDynamicTypeNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$SetDynamicTypeNode.d.ts'
import type { DynamicObjectLibraryImpl$SetFlagsNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$SetFlagsNode.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl extends Object {
    static getDynamicType(paramobject: DynamicObject, paramcachedShape: Shape): Object;
    static getKeyArray(paramobject: DynamicObject, paramcachedShape: Shape): (Object | null)[];
    static getProperty(paramobject: DynamicObject, paramkey: Object, paramcachedShape: Shape, paramkeyCache: DynamicObjectLibraryImpl$KeyCacheNode): Property;
    static getPropertyArray(paramobject: DynamicObject, paramcachedShape: Shape): (Object | null)[];
    static getShapeFlags(paramobject: DynamicObject, paramcachedShape: Shape): number;
    static isShared(paramobject: DynamicObject, paramcachedShape: Shape): boolean;
    static markShared(paramobject: DynamicObject, paramnode: Node, paramcachedShape: Shape, paramsetCache: DynamicObjectLibraryImpl$MakeSharedNode): void;
    static removeKey(paramobject: DynamicObject, paramkey: Object, paramcachedShape: Shape, paramkeyCache: DynamicObjectLibraryImpl$KeyCacheNode): boolean;
    static resetShape(paramobject: DynamicObject, paramotherShape: Shape, paramnode: Node, paramcachedShape: Shape, paramsetCache: DynamicObjectLibraryImpl$ResetShapeNode): boolean;
    static setDynamicType(paramobject: DynamicObject, paramobjectType: Object, paramnode: Node, paramcachedShape: Shape, paramsetCache: DynamicObjectLibraryImpl$SetDynamicTypeNode): boolean;
    static setPropertyFlags(paramobject: DynamicObject, paramkey: Object, parampropertyFlags: number, paramcachedShape: Shape, paramkeyCache: DynamicObjectLibraryImpl$KeyCacheNode): boolean;
    static setShapeFlags(paramobject: DynamicObject, paramflags: number, paramnode: Node, paramcachedShape: Shape, paramsetCache: DynamicObjectLibraryImpl$SetFlagsNode): boolean;
    static updateShape(paramobject: DynamicObject, paramcachedShape: Shape): boolean;
    constructor()
}