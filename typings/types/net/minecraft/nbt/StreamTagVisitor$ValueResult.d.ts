import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class StreamTagVisitor$ValueResult extends Enum<StreamTagVisitor$ValueResult> {
    static BREAK: StreamTagVisitor$ValueResult;
    static CONTINUE: StreamTagVisitor$ValueResult;
    static HALT: StreamTagVisitor$ValueResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StreamTagVisitor$ValueResult;
    static values(): StreamTagVisitor$ValueResult[];
    private constructor()
    name(): "CONTINUE" | "BREAK" | "HALT";
}