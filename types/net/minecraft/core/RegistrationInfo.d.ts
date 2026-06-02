import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KnownPack } from '../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export class RegistrationInfo extends Record {
    static BUILT_IN: RegistrationInfo;
    constructor(knownPackInfo: Optional<KnownPack>, lifecycle: Lifecycle)
    // private knownPackInfo: Optional<KnownPack>;
    // private lifecycle: Lifecycle;
    equals(o: Object | null): boolean;
    hashCode(): number;
    knownPackInfo(): Optional<KnownPack>;
    lifecycle(): Lifecycle;
    toString(): string;
}