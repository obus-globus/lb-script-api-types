import type { BasicPermission } from '../../java/security/BasicPermission.d.ts'
export class SerializablePermission extends BasicPermission {
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    readonly actions: string;
}