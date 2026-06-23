import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ContextKey<T extends unknown> extends Object {
    static vanilla(paramname: string): ContextKey<Object>;
    constructor(name: Identifier)
    // private name: Identifier;
    name(): Identifier;
    toString(): string;
}