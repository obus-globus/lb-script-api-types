import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { Validatable } from '../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
export interface LootContextUser extends Object, Validatable{
    getReferencedContextParams(): ContextKey<Object>[];
    validate(context: ValidationContext): void;
}