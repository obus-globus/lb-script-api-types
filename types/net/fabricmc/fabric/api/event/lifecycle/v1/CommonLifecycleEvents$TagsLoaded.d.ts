import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../../../../net/minecraft/core/RegistryAccess.d.ts'
export interface CommonLifecycleEvents$TagsLoaded extends Object{
    onTagsLoaded(arg0: RegistryAccess, arg1: boolean): void;
}