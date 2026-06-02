import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { ConstraintParser$Constraint } from '../../../../../org/spongepowered/asm/util/ConstraintParser$Constraint.d.ts'
export class ConstraintViolationException extends Exception {
    constructor(arg0: string, arg1: Throwable, arg2: ConstraintParser$Constraint)
    constructor(arg0: string, arg1: Throwable, arg2: ConstraintParser$Constraint, arg3: number)
    constructor(arg0: string, arg1: ConstraintParser$Constraint)
    constructor(arg0: string, arg1: ConstraintParser$Constraint, arg2: number)
    constructor(arg0: Throwable, arg1: ConstraintParser$Constraint)
    constructor(arg0: Throwable, arg1: ConstraintParser$Constraint, arg2: number)
    constructor(arg0: ConstraintParser$Constraint)
    constructor(arg0: ConstraintParser$Constraint, arg1: number)
    readonly badValue: string;
    readonly constraint: ConstraintParser$Constraint;
    getBadValue(): string;
    getConstraint(): ConstraintParser$Constraint;
}