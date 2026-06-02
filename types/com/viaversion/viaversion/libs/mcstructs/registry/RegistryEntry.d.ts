import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RegistryEntry extends Object {
    constructor(arg0: Registry, arg1: Identifier)
    constructor(arg0: Registry, arg1: number)
    // private cachedHashCode: number;
    readonly id: Identifier;
    readonly networkId: number;
    readonly registry: Registry;
    equals(arg0: Object | null): boolean;
    getId(): Identifier;
    getNetworkId(): number;
    getRegistry(): Registry;
    hashCode(): number;
    toString(): string;
}