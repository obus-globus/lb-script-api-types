import type { NamedInteger } from '../../../../org/newsclub/net/unix/NamedInteger.d.ts'
export class AFTIPCSocketAddress$Scope extends NamedInteger {
    static SCOPE_CLUSTER: AFTIPCSocketAddress$Scope;
    static SCOPE_NODE: AFTIPCSocketAddress$Scope;
    static SCOPE_NOT_SPECIFIED: AFTIPCSocketAddress$Scope;
    static ofValue(paramarg0: number): AFTIPCSocketAddress$Scope;
    private constructor(arg0: number)
    private constructor(arg0: string, arg1: number)
}