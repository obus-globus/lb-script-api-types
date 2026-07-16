import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ContainerID extends Enum<ContainerID> {
    static CONTAINER_ID_ARMOR: ContainerID;
    static CONTAINER_ID_FIRST: ContainerID;
    static CONTAINER_ID_INVENTORY: ContainerID;
    static CONTAINER_ID_LAST: ContainerID;
    static CONTAINER_ID_NONE: ContainerID;
    static CONTAINER_ID_OFFHAND: ContainerID;
    static CONTAINER_ID_PLAYER_ONLY_UI: ContainerID;
    static CONTAINER_ID_REGISTRY: ContainerID;
    static CONTAINER_ID_SELECTION_SLOTS: ContainerID;
    static getByName(paramarg0: string): ContainerID;
    static getByName(paramarg0: string, paramarg1: ContainerID): ContainerID;
    static getByValue(paramarg0: number): ContainerID;
    static getByValue(paramarg0: number, paramarg1: ContainerID): ContainerID;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ContainerID;
    static values(): ContainerID[];
    private constructor(arg2: number)
    private constructor(arg2: ContainerID)
    readonly value: number;
    getValue(): number;
    name(): "CONTAINER_ID_NONE" | "CONTAINER_ID_INVENTORY" | "CONTAINER_ID_FIRST" | "CONTAINER_ID_LAST" | "CONTAINER_ID_OFFHAND" | "CONTAINER_ID_ARMOR" | "CONTAINER_ID_SELECTION_SLOTS" | "CONTAINER_ID_PLAYER_ONLY_UI" | "CONTAINER_ID_REGISTRY";
}