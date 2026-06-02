import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { NameAndId } from '../../../../net/minecraft/server/players/NameAndId.d.ts'
export interface UserNameToIdResolver extends Object{
    add(nameAndId: NameAndId): void;
    get(id: UUID): Optional<NameAndId>;
    get(name: string): Optional<NameAndId>;
    resolveOfflineUsers(value: boolean): void;
    save(): void;
}