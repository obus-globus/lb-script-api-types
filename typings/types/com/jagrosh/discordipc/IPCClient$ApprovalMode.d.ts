import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IPCClient$ApprovalMode extends Enum<IPCClient$ApprovalMode> {
    static ACCEPT: IPCClient$ApprovalMode;
    static DENY: IPCClient$ApprovalMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IPCClient$ApprovalMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "ACCEPT" | "DENY";
}