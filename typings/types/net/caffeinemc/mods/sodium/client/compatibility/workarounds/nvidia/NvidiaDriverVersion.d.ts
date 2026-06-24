import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { WindowsFileVersion } from '../../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/WindowsFileVersion.d.ts'
export class NvidiaDriverVersion extends Record {
    static parse(paramarg0: WindowsFileVersion): NvidiaDriverVersion;
    constructor(major: number, minor: number)
    // private major: number;
    // private minor: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    major(): number;
    minor(): number;
    toString(): string;
}