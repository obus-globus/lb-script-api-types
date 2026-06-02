import type { Object } from '../../java/lang/Object.d.ts'
export class HWPartition extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: string)
    readonly identification: string;
    readonly major: number;
    readonly minor: number;
    readonly mountPoint: string;
    readonly name: string;
    readonly size: number;
    readonly type: string;
    readonly uuid: string;
    getIdentification(): string;
    getMajor(): number;
    getMinor(): number;
    getMountPoint(): string;
    getName(): string;
    getSize(): number;
    getType(): string;
    getUuid(): string;
    toString(): string;
}