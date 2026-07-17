import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Debug$DebugShapeVisitor<R extends unknown> extends Object{
    visitShape(shape: Shape): R;
    visitShape(shape: Shape, transitions: JavaMap<Transition, Shape>): R;
}