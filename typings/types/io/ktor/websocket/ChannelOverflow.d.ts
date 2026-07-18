import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class ChannelOverflow extends Enum<ChannelOverflow> {
    static CLOSE: ChannelOverflow;
    static SUSPEND: ChannelOverflow;
    static getEntries(): ChannelOverflow[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ChannelOverflow;
    static values(): ChannelOverflow[];
    private constructor()
    name(): "SUSPEND" | "CLOSE";
}