import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SpdyVersion extends Enum<SpdyVersion> {
    static SPDY_3_1: SpdyVersion;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SpdyVersion;
    static values(): SpdyVersion[];
    private constructor(arg2: number, arg3: number)
    // private minorVersion: number;
    // private version: number;
    minorVersion(): number;
    version(): number;
    name(): "SPDY_3_1";
}