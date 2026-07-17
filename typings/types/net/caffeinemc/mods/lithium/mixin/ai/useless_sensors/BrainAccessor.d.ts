import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Sensor } from '../../../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { SensorType } from '../../../../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
export interface BrainAccessor<E extends LivingEntity> extends Object{
    getSensors(): JavaMap<SensorType<Sensor<E>>, Sensor<E>>;
}