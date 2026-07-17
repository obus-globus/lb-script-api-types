import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class WolfHealthTracker1_14_4 extends Object implements StorableObject {
    static getWolfHealth(paramarg0: LivingEntity): number;
    constructor()
    // private healthDataMap: JavaMap<any, any>;
    getWolfHealth(arg0: number, arg1: number): number;
    onRemove(): void;
    setWolfHealth(arg0: number, arg1: number): void;
}