import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibraryImpl$Move } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$Move.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectLibraryImpl$RemovePlan extends Object {
    constructor(moves: DynamicObjectLibraryImpl$Move[], canMoveInPlace: boolean, shapeBefore: Shape, shapeAfter: Shape)
    // private canMoveInPlace: boolean;
    // private moves: DynamicObjectLibraryImpl$Move[];
    // private shapeAfter: Shape;
    // private shapeBefore: Shape;
    execute(object: DynamicObject): void;
    perform(object: DynamicObject): void;
    performBoundary(object: DynamicObject): void;
}