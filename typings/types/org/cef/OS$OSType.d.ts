import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class OS$OSType extends Enum<OS$OSType> {
    static OSLinux: OS$OSType;
    static OSMacintosh: OS$OSType;
    static OSUndefined: OS$OSType;
    static OSUnknown: OS$OSType;
    static OSWindows: OS$OSType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OS$OSType;
    static values(): OS$OSType[];
    private constructor()
    name(): "OSUndefined" | "OSLinux" | "OSWindows" | "OSMacintosh" | "OSUnknown";
}