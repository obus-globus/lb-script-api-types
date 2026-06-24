import type { ChannelId } from '../../../io/netty/channel/ChannelId.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultChannelId extends Object implements ChannelId {
    static newInstance(): DefaultChannelId;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number)
    // private hashCode: number;
    // private longValue: string;
    // private machineId: number[];
    // private processId: number;
    // private random: number;
    // private sequence: number;
    // private shortValue: string;
    // private timestamp: number;
    asLongText(): string;
    asShortText(): string;
    compareTo(arg0: ChannelId): number;
    // private computeHashCode(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private newLongValue(): string;
    toString(): string;
}