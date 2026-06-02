import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TransportItemsBetweenContainers$TransportItemState extends Enum<TransportItemsBetweenContainers$TransportItemState> {
    static INTERACTING: TransportItemsBetweenContainers$TransportItemState;
    static QUEUING: TransportItemsBetweenContainers$TransportItemState;
    static TRAVELLING: TransportItemsBetweenContainers$TransportItemState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TransportItemsBetweenContainers$TransportItemState;
    static values(): (Object | null)[];
    private constructor()
    name(): "TRAVELLING" | "QUEUING" | "INTERACTING";
}