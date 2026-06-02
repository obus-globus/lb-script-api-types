import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class AgentActionType extends Enum<AgentActionType> {
    static Attack: AgentActionType;
    static Collect: AgentActionType;
    static Destroy: AgentActionType;
    static DetectObstacle: AgentActionType;
    static DetectRedstone: AgentActionType;
    static Drop: AgentActionType;
    static DropAll: AgentActionType;
    static Inspect: AgentActionType;
    static InspectData: AgentActionType;
    static InspectItemCount: AgentActionType;
    static InspectItemDetail: AgentActionType;
    static InspectItemSpace: AgentActionType;
    static Interact: AgentActionType;
    static Move: AgentActionType;
    static PlaceBlock: AgentActionType;
    static Till: AgentActionType;
    static TransferItemTo: AgentActionType;
    static Turn: AgentActionType;
    static getByName(paramarg0: string): AgentActionType;
    static getByName(paramarg0: string, paramarg1: AgentActionType): AgentActionType;
    static getByValue(paramarg0: number): AgentActionType;
    static getByValue(paramarg0: number, paramarg1: AgentActionType): AgentActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AgentActionType;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: AgentActionType)
    readonly value: number;
    getValue(): number;
    name(): "Attack" | "Collect" | "Destroy" | "DetectRedstone" | "DetectObstacle" | "Drop" | "DropAll" | "Inspect" | "InspectData" | "InspectItemCount" | "InspectItemDetail" | "InspectItemSpace" | "Interact" | "Move" | "PlaceBlock" | "Till" | "TransferItemTo" | "Turn";
}