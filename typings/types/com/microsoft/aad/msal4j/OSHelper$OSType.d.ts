import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OSHelper$OSType extends Enum<OSHelper$OSType> {
    static LINUX: OSHelper$OSType;
    static MAC: OSHelper$OSType;
    static WINDOWS: OSHelper$OSType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OSHelper$OSType;
    static values(): OSHelper$OSType[];
    private constructor()
    name(): "MAC" | "WINDOWS" | "LINUX";
}