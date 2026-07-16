import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class StreamTagVisitor$EntryResult extends Enum<StreamTagVisitor$EntryResult> {
    static BREAK: StreamTagVisitor$EntryResult;
    static ENTER: StreamTagVisitor$EntryResult;
    static HALT: StreamTagVisitor$EntryResult;
    static SKIP: StreamTagVisitor$EntryResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StreamTagVisitor$EntryResult;
    static values(): StreamTagVisitor$EntryResult[];
    private constructor()
    name(): "ENTER" | "SKIP" | "BREAK" | "HALT";
}