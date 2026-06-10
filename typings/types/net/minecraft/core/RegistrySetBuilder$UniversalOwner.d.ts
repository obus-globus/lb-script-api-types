import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
export class RegistrySetBuilder$UniversalOwner extends Object implements HolderOwner<Object> {
    private constructor()
    canSerializeIn(context: HolderOwner<Object>): boolean;
    cast<T extends Object | number | string | boolean>(): HolderOwner<T>;
}