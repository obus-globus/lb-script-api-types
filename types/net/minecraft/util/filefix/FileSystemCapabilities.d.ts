import type { Record } from '../../../../java/lang/Record.d.ts'
import type { CopyOption } from '../../../../java/nio/file/CopyOption.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileSystemCapabilities extends Record {
    // private atomicMove: boolean;
    // private hardLinks: boolean;
    atomicMove(): boolean;
    equals(o: Object | null): boolean;
    getMoveOptions(): CopyOption[];
    hardLinks(): boolean;
    hashCode(): number;
    toString(): string;
}