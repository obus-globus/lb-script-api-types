import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { AccessControlContext } from '../../../java/security/AccessControlContext.d.ts'
import type { Principal } from '../../../java/security/Principal.d.ts'
import type { PrivilegedAction } from '../../../java/security/PrivilegedAction.d.ts'
import type { PrivilegedExceptionAction } from '../../../java/security/PrivilegedExceptionAction.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Subject extends Object implements Serializable {
    static callAs(paramarg0: Subject, paramarg1: () => Object | null): Object | null;
    static current(): Subject;
    static doAs(paramarg0: Subject, paramarg1: () => Object | null): Object | null;
    static doAsPrivileged(paramarg0: Subject, paramarg1: () => Object | null, paramarg2: AccessControlContext): Object | null;
    static getSubject(paramarg0: AccessControlContext): Subject;
    constructor()
    constructor(arg0: boolean, arg1: Principal[], arg2: (Object | null)[], arg3: (Object | null)[])
    principals: Principal[];
    // private privCredentials: Object[];
    // private pubCredentials: Object[];
    readonly readOnly: boolean;
    equals(arg0: Object | null): boolean;
    // private getCredHashCode(arg0: Object): number;
    getPrincipals(): Principal[];
    getPrincipals<T extends Principal>(arg0: Class<T>): T[];
    getPrivateCredentials(): Object[];
    getPrivateCredentials<T extends unknown>(arg0: Class<T>): T[];
    getPublicCredentials(): Object[];
    getPublicCredentials<T extends unknown>(arg0: Class<T>): T[];
    hashCode(): number;
    isReadOnly(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    setReadOnly(): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}