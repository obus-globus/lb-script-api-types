import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { UnadoptableNode } from '../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectLibraryImpl$Uncached extends DynamicObjectLibrary implements UnadoptableNode {
    static getFactory(): LibraryFactory<DynamicObjectLibrary>;
    static getUncached(): DynamicObjectLibrary;
    private constructor()
    accepts(receiver: Object): boolean;
    containsKey(arg0Value: DynamicObject, arg1Value: Object): boolean;
    getDoubleOrDefault(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
    getDynamicType(arg0Value: DynamicObject): Object;
    getIntOrDefault(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
    getKeyArray(arg0Value: DynamicObject): Object[];
    getLongOrDefault(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): number;
    getOrDefault(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): Object;
    getProperty(arg0Value: DynamicObject, arg1Value: Object): Property;
    getPropertyArray(arg0Value: DynamicObject): Property[];
    getShape(arg0Value: DynamicObject): Shape;
    getShapeFlags(arg0Value: DynamicObject): number;
    isShared(arg0Value: DynamicObject): boolean;
    markShared(arg0Value: DynamicObject): void;
    put(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): void;
    putConstant(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number): void;
    putDouble(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number): void;
    putIfPresent(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object): boolean;
    putInt(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number): void;
    putLong(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number): void;
    putWithFlags(arg0Value: DynamicObject, arg1Value: Object, arg2Value: Object, arg3Value: number): void;
    removeKey(arg0Value: DynamicObject, arg1Value: Object): boolean;
    resetShape(arg0Value: DynamicObject, arg1Value: Shape): boolean;
    setDynamicType(arg0Value: DynamicObject, arg1Value: Object): boolean;
    setPropertyFlags(arg0Value: DynamicObject, arg1Value: Object, arg2Value: number): boolean;
    setShapeFlags(arg0Value: DynamicObject, arg1Value: number): boolean;
    updateShape(arg0Value: DynamicObject): boolean;
}