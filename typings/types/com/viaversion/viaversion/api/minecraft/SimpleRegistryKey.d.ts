import type { RegistryKey } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryKey.d.ts'
import type { Key } from '../../../../../com/viaversion/viaversion/util/Key.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimpleRegistryKey extends Record implements RegistryKey {
    constructor(registry: Key)
    // private registry: Key;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registry(): Key;
    toString(): string;
}