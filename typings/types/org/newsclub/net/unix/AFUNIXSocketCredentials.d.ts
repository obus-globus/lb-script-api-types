import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AFUNIXSocketCredentials extends Object implements Serializable {
    static SAME_PROCESS: AFUNIXSocketCredentials;
    static remotePeerCredentials(): AFUNIXSocketCredentials;
    constructor()
    readonly gids: number[];
    readonly pid: number;
    readonly uid: number;
    // private uuid: UUID;
    equals(arg0: Object | null): boolean;
    getGid(): number;
    getGids(): number[];
    getPid(): number;
    getUUID(): UUID;
    getUid(): number;
    hashCode(): number;
    isEmpty(): boolean;
    setGids(arg0: number[]): void;
    setUUID(arg0: string): void;
    toString(): string;
}