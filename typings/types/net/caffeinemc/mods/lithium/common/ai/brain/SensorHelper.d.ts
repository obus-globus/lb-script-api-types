import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { SensorType } from '../../../../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
export class SensorHelper extends Object {
    static disableSensor(paramarg0: LivingEntity, paramarg1: SensorType<any>): void;
    static enableSensor(paramarg0: LivingEntity | null, paramarg1: SensorType<any>): void;
    static enableSensor(paramarg0: LivingEntity | null, paramarg1: SensorType<any>, paramarg2: boolean): void;
    constructor()
}