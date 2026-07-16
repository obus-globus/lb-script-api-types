import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakReliability extends Enum<RakReliability> {
    static RELIABLE: RakReliability;
    static RELIABLE_ORDERED: RakReliability;
    static RELIABLE_ORDERED_WITH_ACK_RECEIPT: RakReliability;
    static RELIABLE_SEQUENCED: RakReliability;
    static RELIABLE_SEQUENCED_WITH_ACK_RECEIPT: RakReliability;
    static RELIABLE_WITH_ACK_RECEIPT: RakReliability;
    static UNRELIABLE: RakReliability;
    static UNRELIABLE_SEQUENCED: RakReliability;
    static UNRELIABLE_SEQUENCED_WITH_ACK_RECEIPT: RakReliability;
    static UNRELIABLE_WITH_ACK_RECEIPT: RakReliability;
    static fromId(paramarg0: number): RakReliability;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RakReliability;
    static values(): RakReliability[];
    private constructor(arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean)
    readonly ordered: boolean;
    readonly reliable: boolean;
    readonly sequenced: boolean;
    readonly size: number;
    readonly withAckReceipt: boolean;
    getSize(): number;
    isOrdered(): boolean;
    isReliable(): boolean;
    isSequenced(): boolean;
    isWithAckReceipt(): boolean;
    name(): "UNRELIABLE" | "UNRELIABLE_SEQUENCED" | "RELIABLE" | "RELIABLE_ORDERED" | "RELIABLE_SEQUENCED" | "UNRELIABLE_WITH_ACK_RECEIPT" | "UNRELIABLE_SEQUENCED_WITH_ACK_RECEIPT" | "RELIABLE_WITH_ACK_RECEIPT" | "RELIABLE_ORDERED_WITH_ACK_RECEIPT" | "RELIABLE_SEQUENCED_WITH_ACK_RECEIPT";
}