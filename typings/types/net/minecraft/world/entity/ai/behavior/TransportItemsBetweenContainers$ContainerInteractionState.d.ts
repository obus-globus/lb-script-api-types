import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TransportItemsBetweenContainers$ContainerInteractionState extends Enum<TransportItemsBetweenContainers$ContainerInteractionState> {
    static PICKUP_ITEM: TransportItemsBetweenContainers$ContainerInteractionState;
    static PICKUP_NO_ITEM: TransportItemsBetweenContainers$ContainerInteractionState;
    static PLACE_ITEM: TransportItemsBetweenContainers$ContainerInteractionState;
    static PLACE_NO_ITEM: TransportItemsBetweenContainers$ContainerInteractionState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TransportItemsBetweenContainers$ContainerInteractionState;
    static values(): TransportItemsBetweenContainers$ContainerInteractionState[];
    private constructor()
    name(): "PICKUP_ITEM" | "PICKUP_NO_ITEM" | "PLACE_ITEM" | "PLACE_NO_ITEM";
}