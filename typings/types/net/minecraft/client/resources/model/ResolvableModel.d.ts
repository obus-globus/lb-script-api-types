import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
export interface ResolvableModel extends Object{
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
}