import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugScreenEntryStatus } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntryStatus.d.ts'
import type { DebugScreenProfile } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenProfile.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugScreenEntryList$SerializedOptions extends Record {
    static CODEC: Codec<DebugScreenEntryList$SerializedOptions>;
    private constructor(profile: Optional<DebugScreenProfile>, custom: Optional<JavaMap<Identifier, DebugScreenEntryStatus>>)
    // private custom: Optional<JavaMap<Identifier, DebugScreenEntryStatus>>;
    // private profile: Optional<DebugScreenProfile>;
    custom(): Optional<JavaMap<Identifier, DebugScreenEntryStatus>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    profile(): Optional<DebugScreenProfile>;
    toString(): string;
}