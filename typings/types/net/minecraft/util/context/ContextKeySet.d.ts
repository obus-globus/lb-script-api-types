import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ContextKey } from '../../../../net/minecraft/util/context/ContextKey.d.ts'
export class ContextKeySet extends Object {
    private constructor(required: ContextKey<Object>[], optional: ContextKey<Object>[])
    // private allowed: ContextKey<Object>[];
    // private required: ContextKey<Object>[];
    allowed(): ContextKey<Object>[];
    required(): ContextKey<Object>[];
    toString(): string;
}