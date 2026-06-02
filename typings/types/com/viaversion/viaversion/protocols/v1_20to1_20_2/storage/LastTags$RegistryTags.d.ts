import type { TagData } from '../../../../../../com/viaversion/viaversion/api/minecraft/TagData.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastTags$RegistryTags extends Record {
    private constructor(registryKey: string, tags: TagData[])
    // private registryKey: string;
    // private tags: TagData[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    registryKey(): string;
    tags(): TagData[];
    toString(): string;
}