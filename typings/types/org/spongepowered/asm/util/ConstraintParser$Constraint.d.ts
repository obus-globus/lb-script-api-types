import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ITokenProvider } from '../../../../org/spongepowered/asm/util/ITokenProvider.d.ts'
export class ConstraintParser$Constraint extends Object {
    static NONE: ConstraintParser$Constraint;
    constructor(arg0: string)
    // private constraint: string[];
    // private expr: string;
    readonly max: number;
    readonly min: number;
    // private next: ConstraintParser$Constraint;
    readonly token: string;
    append(arg0: ConstraintParser$Constraint): void;
    check(arg0: ITokenProvider): void;
    // private elem(arg0: number): string;
    getMax(): number;
    getMin(): number;
    getRangeHumanReadable(): string;
    getToken(): string;
    // private has(arg0: number): boolean;
    // private parse(): void;
    toString(): string;
    // private val(arg0: number): number;
}