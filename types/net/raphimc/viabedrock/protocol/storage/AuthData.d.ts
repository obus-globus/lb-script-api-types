import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Jwt } from '../../../../../net/raphimc/viabedrock/api/util/Jwt.d.ts'
export class AuthData extends Object implements StorableObject {
    constructor(arg0: string, arg1: KeyPair)
    constructor(arg0: string, arg1: KeyPair, arg2: UUID)
    constructor(arg0: string, arg1: string, arg2: string, arg3: KeyPair, arg4: UUID)
    readonly clientRandomId: number;
    readonly deviceId: UUID;
    readonly multiplayerToken: string;
    // private multiplayerTokenJwt: Jwt;
    readonly selfSignedId: UUID;
    readonly sessionKeyPair: KeyPair;
    readonly skinJwt: string;
    getClientRandomId(): number;
    getDeviceId(): UUID;
    getDisplayName(): string;
    getMultiplayerToken(): string;
    getSelfSignedId(): UUID;
    getSessionKeyPair(): KeyPair;
    getSkinJwt(): string;
    getXuid(): string;
    onRemove(): void;
    setClientRandomId(arg0: number): void;
    setDeviceId(arg0: UUID): void;
    setSelfSignedId(arg0: UUID): void;
    setSkinJwt(arg0: string): void;
}