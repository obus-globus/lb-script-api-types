import type { ShapeImpl } from '../../../../../com/oracle/truffle/api/object/ShapeImpl.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Debug$DebugShapeVisitor<R extends unknown> extends Object{
    visitShape(shape: ShapeImpl): R;
    visitShape(shape: ShapeImpl, transitions: Map<Transition, ShapeImpl>): R;
}