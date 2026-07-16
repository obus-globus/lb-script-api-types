import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Sensor } from '../../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { SensorType } from '../../../../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
export class SensorHelper extends Object {
    static disableSensor(paramarg0: LivingEntity, paramarg1: SensorType<any>): void;
    static enableSensor<T extends LivingEntity, U extends Sensor<T>>(paramarg0: T, paramarg1: SensorType<U>): void;
    static enableSensor<T extends LivingEntity, U extends Sensor<T>>(paramarg0: T, paramarg1: SensorType<U>, paramarg2: boolean): void;
    constructor()
}