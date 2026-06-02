import type { TransferProvider } from '../../../../../../com/viaversion/viabackwards/protocol/v1_20_5to1_20_3/provider/TransferProvider.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NoopTransferProvider extends Object implements TransferProvider {
    static NOOP: (param0: UserConnection, param1: string, param2: number) => void;
    constructor()
    connectToServer(arg0: UserConnection, arg1: string, arg2: number): void;
}