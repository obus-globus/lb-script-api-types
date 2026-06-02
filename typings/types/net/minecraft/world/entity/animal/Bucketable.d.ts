import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface Bucketable extends Object{
    fromBucket(): boolean;
    getBucketItemStack(): ItemStack;
    getPickupSound(): SoundEvent;
    loadFromBucketTag(tag: CompoundTag): void;
    saveToBucketTag(bucket: ItemStack): void;
    setFromBucket(fromBucket: boolean): void;
}