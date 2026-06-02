import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
export abstract class DataSlot extends Object {
    static forContainer(paramcontainer: ContainerData, paramdataId: number): DataSlot;
    static shared(paramstorage: number[], paramindex: number): DataSlot;
    static standalone(): DataSlot;
    constructor()
    // private prevValue: number;
    checkAndClearUpdateFlag(): boolean;
    get(): number;
    set(value: number): void;
}