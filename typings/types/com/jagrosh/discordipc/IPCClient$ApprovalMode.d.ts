import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class IPCClient$ApprovalMode extends Enum<IPCClient$ApprovalMode> {
    static ACCEPT: IPCClient$ApprovalMode;
    static DENY: IPCClient$ApprovalMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IPCClient$ApprovalMode;
    static values(): IPCClient$ApprovalMode[];
    private constructor()
    name(): "ACCEPT" | "DENY";
}