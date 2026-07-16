import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Util$OS extends Enum<Util$OS> {
    static LINUX: Util$OS;
    static OSX: Util$OS;
    static SOLARIS: Util$OS;
    static UNKNOWN: Util$OS;
    static WINDOWS: Util$OS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Util$OS;
    static values(): Util$OS[];
    private constructor(telemetryName: string)
    // private telemetryName: string;
    getOpenUriArguments(uri: URI): string[];
    openFile(file: File): void;
    openPath(path: Path): void;
    openUri(uri: URI): void;
    openUri(uri: string): void;
    telemetryName(): string;
    name(): "LINUX" | "SOLARIS" | "WINDOWS" | "OSX" | "UNKNOWN";
}