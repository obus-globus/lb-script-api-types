import type { FileDescriptor } from '../../java/io/FileDescriptor.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../java/lang/ThreadGroup.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Permission } from '../../java/security/Permission.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class SecurityManager extends Object {
    constructor()
    checkAccept(arg0: string, arg1: number): void;
    checkAccess(arg0: Thread): void;
    checkAccess(arg0: ThreadGroup): void;
    checkConnect(arg0: string, arg1: number): void;
    checkConnect(arg0: string, arg1: number, arg2: Object): void;
    checkCreateClassLoader(): void;
    checkDelete(arg0: string): void;
    checkExec(arg0: string): void;
    checkExit(arg0: number): void;
    checkLink(arg0: string): void;
    checkListen(arg0: number): void;
    checkMulticast(arg0: InetAddress): void;
    checkMulticast(arg0: InetAddress, arg1: number): void;
    checkPackageAccess(arg0: string): void;
    checkPackageDefinition(arg0: string): void;
    checkPermission(arg0: Permission): void;
    checkPermission(arg0: Permission, arg1: Object): void;
    checkPrintJobAccess(): void;
    checkPropertiesAccess(): void;
    checkPropertyAccess(arg0: string): void;
    checkRead(arg0: FileDescriptor): void;
    checkRead(arg0: string): void;
    checkRead(arg0: string, arg1: Object): void;
    checkSecurityAccess(arg0: string): void;
    checkSetFactory(): void;
    checkWrite(arg0: FileDescriptor): void;
    checkWrite(arg0: string): void;
    getClassContext(): Class<Object>[];
    getSecurityContext(): Object;
    getThreadGroup(): ThreadGroup;
}