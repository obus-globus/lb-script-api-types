import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface PostChainConfig$Input extends Object{
    referencedTargets(): Identifier[];
    samplerName(): string;
}