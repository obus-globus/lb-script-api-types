import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { PermissionCollection } from '../../java/security/PermissionCollection.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SocketPermission extends Permission implements Serializable {
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: string)
    readonly actions: string;
    // private addresses: InetAddress[];
    // private cdomain: string;
    // private cname: string;
    // private defaultDeny: boolean;
    // private hdomain: string;
    // private hostname: string;
    // private init_with_ip: boolean;
    // private invalid: boolean;
    // private mask: number;
    // private portrange: number[];
    // private trusted: boolean;
    // private untrusted: boolean;
    // private wildcard: boolean;
    // private authorized(arg0: number[]): boolean;
    // private authorizedIPv4(arg0: number[]): boolean;
    // private authorizedIPv6(arg0: number[]): boolean;
    // private compareHostnames(arg0: SocketPermission): boolean;
    equals(arg0: Object | null): boolean;
    getActions(): string;
    getCanonName(): void;
    getIP(): void;
    getMask(): number;
    hashCode(): number;
    implies(arg0: Permission): boolean;
    impliesIgnoreMask(arg0: SocketPermission): boolean;
    // private includesEphemerals(): boolean;
    // private init(arg0: string, arg1: number): void;
    // private isUntrusted(): boolean;
    // private match(arg0: string, arg1: string): boolean;
    newPermissionCollection(): PermissionCollection;
    // private parsePort(arg0: string): number[];
    // private readObject(arg0: ObjectInputStream): void;
    // private setDeny(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}