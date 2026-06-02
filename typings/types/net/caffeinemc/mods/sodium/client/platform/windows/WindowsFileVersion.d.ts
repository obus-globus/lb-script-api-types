import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VersionFixedFileInfoStruct } from '../../../../../../../net/caffeinemc/mods/sodium/client/platform/windows/api/version/VersionFixedFileInfoStruct.d.ts'
export class WindowsFileVersion extends Record {
    static fromFileVersion(paramarg0: VersionFixedFileInfoStruct): WindowsFileVersion;
    // private w: number;
    // private x: number;
    // private y: number;
    // private z: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
}