import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NetherNetSignaling extends AutoCloseable, Object {
    close(): void;
    getLocalNetworkId(): string;
    removeSignalHandler(arg0: number): void;
    sendSignal(arg0: string, arg1: string): void;
    setSignalHandler(arg0: number, arg1: (param0: string) => void): void;
}