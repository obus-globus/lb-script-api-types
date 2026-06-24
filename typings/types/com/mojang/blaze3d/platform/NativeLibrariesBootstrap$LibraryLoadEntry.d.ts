import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NativeLibrariesBootstrap$LibraryLoadEntry extends Record {
    private constructor(name: string, loader: () => void)
    // private loader: () => void;
    // private name: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    loader(): () => void;
    name(): string;
    toString(): string;
}