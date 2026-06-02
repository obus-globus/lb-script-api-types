import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Util$OS extends Enum<Util$OS> {
    static LINUX: Util$OS;
    static OSX: Util$OS;
    static SOLARIS: Util$OS;
    static UNKNOWN: Util$OS;
    static WINDOWS: Util$OS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Util$OS;
    static values(): (Object | null)[];
    private constructor(telemetryName: string)
    // private telemetryName: string;
    getOpenUriArguments(uri: URI): string[];
    openFile(file: File): void;
    openPath(path: Path[]): void;
    openUri(uri: URI): void;
    openUri(uri: string): void;
    telemetryName(): string;
    name(): "LINUX" | "SOLARIS" | "WINDOWS" | "OSX" | "UNKNOWN";
}