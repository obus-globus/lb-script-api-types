import type { Optional } from '../../../java/util/Optional.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class User extends Object {
    constructor(name: string, uuid: UUID, accessToken: string, xuid: Optional<string>, clientId: Optional<string>)
    readonly accessToken: string;
    readonly clientId: Optional<string>;
    readonly name: string;
    // private uuid: UUID;
    readonly xuid: Optional<string>;
    getAccessToken(): string;
    getClientId(): Optional<string>;
    getName(): string;
    getProfileId(): UUID;
    getSessionId(): string;
    getXuid(): Optional<string>;
}