import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternalResource$OS extends Enum<InternalResource$OS> {
    static DARWIN: InternalResource$OS;
    static LINUX: InternalResource$OS;
    static WINDOWS: InternalResource$OS;
    static getCurrent(): InternalResource$OS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InternalResource$OS;
    static values(): InternalResource$OS[];
    private constructor(id: string)
    // private id: string;
    toString(): string;
    name(): "DARWIN" | "LINUX" | "WINDOWS";
}