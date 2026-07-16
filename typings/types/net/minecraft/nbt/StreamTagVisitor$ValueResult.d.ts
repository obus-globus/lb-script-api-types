import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class StreamTagVisitor$ValueResult extends Enum<StreamTagVisitor$ValueResult> {
    static BREAK: StreamTagVisitor$ValueResult;
    static CONTINUE: StreamTagVisitor$ValueResult;
    static HALT: StreamTagVisitor$ValueResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StreamTagVisitor$ValueResult;
    static values(): StreamTagVisitor$ValueResult[];
    private constructor()
    name(): "CONTINUE" | "BREAK" | "HALT";
}