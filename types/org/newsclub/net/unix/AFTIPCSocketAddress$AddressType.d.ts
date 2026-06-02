import type { AFTIPCSocketAddress$AddressType$DebugStringProvider } from '../../../../org/newsclub/net/unix/AFTIPCSocketAddress$AddressType$DebugStringProvider.d.ts'
import type { AFTIPCSocketAddress$Scope } from '../../../../org/newsclub/net/unix/AFTIPCSocketAddress$Scope.d.ts'
import type { NamedInteger } from '../../../../org/newsclub/net/unix/NamedInteger.d.ts'
export class AFTIPCSocketAddress$AddressType extends NamedInteger {
    static SERVICE_ADDR: AFTIPCSocketAddress$AddressType;
    static SERVICE_RANGE: AFTIPCSocketAddress$AddressType;
    static SOCKET_ADDR: AFTIPCSocketAddress$AddressType;
    static formatTIPCInt(paramarg0: number): string;
    private constructor(arg0: number)
    private constructor(arg0: string, arg1: number, arg2: (param0: number, param1: number, param2: number) => kotlin.String)
    // private ds: (param0: number, param1: number, param2: number) => kotlin.String;
    // private toDebugString(arg0: AFTIPCSocketAddress$Scope, arg1: number, arg2: number, arg3: number): string;
}