import type { Object } from '../../../java/lang/Object.d.ts'
export class OperatingSystem$OSVersionInfo extends Object {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly buildNumber: string;
    readonly codeName: string;
    readonly version: string;
    // private versionStr: string;
    getBuildNumber(): string;
    getCodeName(): string;
    getVersion(): string;
    toString(): string;
}