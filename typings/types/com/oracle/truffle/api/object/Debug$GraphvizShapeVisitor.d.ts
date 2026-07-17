import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Debug$DebugShapeVisitor } from '../../../../../com/oracle/truffle/api/object/Debug$DebugShapeVisitor.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Transition } from '../../../../../com/oracle/truffle/api/object/Transition.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Debug$GraphvizShapeVisitor extends Object implements Debug$DebugShapeVisitor<Debug$GraphvizShapeVisitor> {
    constructor()
    // private drawn: Shape[];
    // private sb: StringBuilder;
    toString(): string;
    visitShape(shape: Shape): Debug$GraphvizShapeVisitor;
    visitShape(shape: Shape, transitions: JavaMap<Transition, Shape>): Debug$GraphvizShapeVisitor;
}