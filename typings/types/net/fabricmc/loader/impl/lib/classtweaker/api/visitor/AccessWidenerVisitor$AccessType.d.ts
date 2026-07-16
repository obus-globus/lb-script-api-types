import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AccessWidenerVisitor$AccessType extends Enum<AccessWidenerVisitor$AccessType> {
    static ACCESSIBLE: AccessWidenerVisitor$AccessType;
    static EXTENDABLE: AccessWidenerVisitor$AccessType;
    static MUTABLE: AccessWidenerVisitor$AccessType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AccessWidenerVisitor$AccessType;
    static values(): AccessWidenerVisitor$AccessType[];
    private constructor(arg2: string)
    // private id: string;
    toString(): string;
    name(): "ACCESSIBLE" | "EXTENDABLE" | "MUTABLE";
}