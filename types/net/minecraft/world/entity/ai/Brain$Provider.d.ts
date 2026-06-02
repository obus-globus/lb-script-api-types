import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Brain } from '../../../../../net/minecraft/world/entity/ai/Brain.d.ts'
import type { Brain$ActivitySupplier } from '../../../../../net/minecraft/world/entity/ai/Brain$ActivitySupplier.d.ts'
import type { Brain$Packed } from '../../../../../net/minecraft/world/entity/ai/Brain$Packed.d.ts'
export class Brain$Provider<E extends LivingEntity> extends Object {
    private constructor(memoryTypes: E[], sensorTypes: E[], activities: (param0: E) => kotlin.collections.List<unknown>)
    // private activities: (param0: E) => kotlin.collections.List<unknown>;
    // private memoryTypes: E[];
    // private sensorTypes: E[];
    makeBrain(body: E, packed: Brain$Packed): Brain<E>;
}