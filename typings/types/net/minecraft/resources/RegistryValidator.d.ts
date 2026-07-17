import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryValidator<T extends unknown> extends Object{
    validate(registry: T[], loadingErrors: JavaMap<ResourceKey<Object>, Exception>): void;
}