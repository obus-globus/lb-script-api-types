import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TransportItemsBetweenContainers$TransportItemState extends Enum<TransportItemsBetweenContainers$TransportItemState> {
    static INTERACTING: TransportItemsBetweenContainers$TransportItemState;
    static QUEUING: TransportItemsBetweenContainers$TransportItemState;
    static TRAVELLING: TransportItemsBetweenContainers$TransportItemState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TransportItemsBetweenContainers$TransportItemState;
    static values(): TransportItemsBetweenContainers$TransportItemState[];
    private constructor()
    name(): "TRAVELLING" | "QUEUING" | "INTERACTING";
}