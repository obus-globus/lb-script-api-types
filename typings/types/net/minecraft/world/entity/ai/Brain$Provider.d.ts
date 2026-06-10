import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ActivityData } from '../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
import type { Brain } from '../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { Brain$ActivitySupplier } from '../../../../../net/minecraft/world/entity/ai/Brain$ActivitySupplier.d.ts'
import type { Brain$Packed } from '../../../../../net/minecraft/world/entity/ai/Brain$Packed.d.ts'
import type { MemoryModuleType } from '../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { Sensor } from '../../../../../net/minecraft/world/entity/ai/sensing/Sensor.d.ts'
import type { SensorType } from '../../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
export class Brain$Provider<E extends LivingEntity> extends Object {
    private constructor(memoryTypes: MemoryModuleType<Object>[], sensorTypes: SensorType<Sensor<E>>[], activities: (param0: E) => ActivityData<E>[])
    // private activities: (param0: E) => ActivityData<E>[];
    // private memoryTypes: MemoryModuleType<Object>[];
    // private sensorTypes: SensorType<Sensor<E>>[];
    makeBrain(body: E, packed: Brain$Packed): Brain<E>;
}