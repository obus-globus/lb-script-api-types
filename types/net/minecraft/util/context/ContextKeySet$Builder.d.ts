import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ContextKeySet } from '../../../../net/minecraft/util/context/ContextKeySet.d.ts'
export class ContextKeySet$Builder extends Object {
    constructor()
    // private optional: ContextKey<Object>[];
    // private required: ContextKey<Object>[];
    build(): ContextKeySet;
    optional(param: ContextKey<Object>): ContextKeySet$Builder;
    required(param: ContextKey<Object>): ContextKeySet$Builder;
}