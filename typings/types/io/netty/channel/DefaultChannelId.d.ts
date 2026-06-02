import type { ChannelId } from '../../../io/netty/channel/ChannelId.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultChannelId extends Object implements ChannelId {
    static newInstance(): DefaultChannelId;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number)
    // private data: number[];
    // private hashCode: number;
    // private longValue: string;
    // private shortValue: string;
    // private appendHexDumpField(arg0: StringBuilder, arg1: number, arg2: number): number;
    asLongText(): string;
    asShortText(): string;
    compareTo(arg0: ChannelId): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    // private newLongValue(): string;
    toString(): string;
}