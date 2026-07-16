import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PcapWriteHandler$ChannelType extends Enum<PcapWriteHandler$ChannelType> {
    static TCP: PcapWriteHandler$ChannelType;
    static UDP: PcapWriteHandler$ChannelType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PcapWriteHandler$ChannelType;
    static values(): PcapWriteHandler$ChannelType[];
    private constructor()
    name(): "TCP" | "UDP";
}