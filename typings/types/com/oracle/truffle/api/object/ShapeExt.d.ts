import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Layout } from '../../../../../com/oracle/truffle/api/object/Layout.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Shape$Builder } from '../../../../../com/oracle/truffle/api/object/Shape$Builder.d.ts'
import type { Shape$DerivedBuilder } from '../../../../../com/oracle/truffle/api/object/Shape$DerivedBuilder.d.ts'
import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { ShapeImpl$BaseAllocator } from '../../../../../com/oracle/truffle/api/object/ShapeImpl$BaseAllocator.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShapeExt extends ShapeImpl {
    static diff(paramoldShape: Shape, paramnewShape: Shape): Property[];
    static findCommonAncestor(paramleft: ShapeImpl, paramright: ShapeImpl): ShapeImpl;
    static newBuilder(): Shape$Builder;
    static newBuilder(parambaseShape: Shape): Shape$DerivedBuilder;
    constructor(layout: Layout, sharedData: Object, parent: ShapeImpl, objectType: Object, propertyMap: PropertyMap, transition: Transition, allocator: ShapeImpl$BaseAllocator, flags: number)
    constructor(layout: Layout, sharedData: Object, objectType: Object, flags: number, singleContextAssumption: Assumption)
    // private predecessorShape: Object;
    // private successorShape: ShapeImpl;
    addPredecessorShape(nextShape: ShapeImpl): void;
    createShape(layout: Layout, sharedData: Object, parent: ShapeImpl, objectType: Object, propertyMap: PropertyMap, transition: Transition, allocator: ShapeImpl$BaseAllocator, flags: number): ShapeImpl;
    getRoot(): ShapeImpl;
    getSuccessorShape(): ShapeImpl;
    setSuccessorShape(successorShape: ShapeImpl): void;
    tryMerge(other: Shape): Shape;
}