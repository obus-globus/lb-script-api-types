import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PcapWriteHandler$ChannelType extends Enum<PcapWriteHandler$ChannelType> {
    static TCP: PcapWriteHandler$ChannelType;
    static UDP: PcapWriteHandler$ChannelType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PcapWriteHandler$ChannelType;
    static values(): (Object | null)[];
    private constructor()
    name(): "TCP" | "UDP";
}