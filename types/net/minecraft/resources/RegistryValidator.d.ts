import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryValidator<T extends Object | number | string | boolean> extends Object{
    validate(registry: T[], loadingErrors: Map<ResourceKey<Object>, Exception>): void;
}