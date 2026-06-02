import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakState } from '../../../../../../org/cloudburstmc/netty/channel/raknet/RakState.d.ts'
export interface RakChannelMetrics extends Object{
    ackIn(arg0: number): void;
    ackOut(arg0: number): void;
    bytesIn(arg0: number): void;
    bytesOut(arg0: number): void;
    encapsulatedIn(arg0: number): void;
    encapsulatedOut(arg0: number): void;
    nackIn(arg0: number): void;
    nackOut(arg0: number): void;
    rakDatagramsIn(arg0: number): void;
    rakDatagramsOut(arg0: number): void;
    rakStaleDatagrams(arg0: number): void;
    stateChange(arg0: RakState): void;
}