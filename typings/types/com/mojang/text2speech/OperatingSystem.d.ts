import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class OperatingSystem extends Enum<OperatingSystem> {
    static LINUX: OperatingSystem;
    static MAC_OS: OperatingSystem;
    static UNSUPPORTED: OperatingSystem;
    static WINDOWS: OperatingSystem;
    static get(): OperatingSystem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OperatingSystem;
    static values(): OperatingSystem[];
    private constructor(arg2: string)
    // private detectWith: string;
    name(): "LINUX" | "WINDOWS" | "MAC_OS" | "UNSUPPORTED";
}