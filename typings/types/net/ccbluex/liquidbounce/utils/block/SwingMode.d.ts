import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { InteractionHand } from '../../../../../net/minecraft/world/InteractionHand.d.ts'
export class SwingMode extends Enum<SwingMode> implements Consumer<InteractionHand>, Tagged {
    static Companion: Tagged$Companion;
    static DO_NOT_HIDE: SwingMode;
    static HIDE_BOTH: SwingMode;
    static HIDE_CLIENT: SwingMode;
    static HIDE_SERVER: SwingMode;
    static getEntries(): SwingMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SwingMode;
    static values(): SwingMode[];
    private constructor(tag: string, serverSwing: boolean)
    readonly serverSwing: boolean;
    readonly tag: string;
    accept(hand: InteractionHand): void;
    andThen(arg0: (param0: InteractionHand) => void): (param0: InteractionHand) => void;
    swing(hand: InteractionHand): void;
    name(): "DO_NOT_HIDE" | "HIDE_BOTH" | "HIDE_CLIENT" | "HIDE_SERVER";
}