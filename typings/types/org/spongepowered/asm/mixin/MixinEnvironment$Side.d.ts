import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MixinEnvironment$Side extends Enum<MixinEnvironment$Side> {
    static CLIENT: MixinEnvironment$Side;
    static SERVER: MixinEnvironment$Side;
    static UNKNOWN: MixinEnvironment$Side;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MixinEnvironment$Side;
    static values(): (Object | null)[];
    constructor(arg2: any)
    detect(): boolean;
    name(): "UNKNOWN" | "CLIENT" | "SERVER";
}