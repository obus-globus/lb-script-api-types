import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Copyable } from '../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegistryEntry extends Record implements Copyable {
    static copy<T extends unknown>(paramarg0: T): T;
    constructor(key: string, tag: Tag)
    // private key: string;
    // private tag: Tag;
    copy(): RegistryEntry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): string;
    tag(): Tag;
    toString(): string;
    withKey(arg0: string): RegistryEntry;
}