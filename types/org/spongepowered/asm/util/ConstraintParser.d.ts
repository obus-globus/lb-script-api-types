import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { ConstraintParser$Constraint } from '../../../../org/spongepowered/asm/util/ConstraintParser$Constraint.d.ts'
export class ConstraintParser extends Object {
    static parse(paramarg0: string): ConstraintParser$Constraint;
    static parse(paramarg0: AnnotationNode): ConstraintParser$Constraint;
    private constructor()
}