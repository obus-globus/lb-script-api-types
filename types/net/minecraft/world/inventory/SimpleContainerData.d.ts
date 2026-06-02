import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
export class SimpleContainerData extends Object implements ContainerData {
    constructor(count: number)
    // private ints: number[];
    get(dataId: number): number;
    getCount(): number;
    set(dataId: number, value: number): void;
}