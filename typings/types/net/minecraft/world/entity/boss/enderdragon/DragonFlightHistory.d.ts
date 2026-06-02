import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DragonFlightHistory$Sample } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/DragonFlightHistory$Sample.d.ts'
export class DragonFlightHistory extends Object {
    static LENGTH: number;
    constructor()
    // private head: number;
    // private samples: DragonFlightHistory$Sample[];
    copyFrom(history: DragonFlightHistory): void;
    get(delay: number): DragonFlightHistory$Sample;
    get(delay: number, partialTicks: number): DragonFlightHistory$Sample;
    record(y: number, yRot: number): void;
}