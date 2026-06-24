import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vector4f } from '../../../../../../org/joml/Vector4f.d.ts'
export class FogParameters extends Record {
    static NONE: FogParameters;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
    constructor(red: number, green: number, blue: number, alpha: number, environmentalStart: number, environmentalEnd: number, renderStart: number, renderEnd: number, cullDistance: number)
    constructor(arg0: Vector4f, arg1: FogParameters)
    // private alpha: number;
    // private blue: number;
    // private cullDistance: number;
    // private environmentalEnd: number;
    // private environmentalStart: number;
    // private green: number;
    // private red: number;
    // private renderEnd: number;
    // private renderStart: number;
    alpha(): number;
    blue(): number;
    cullDistance(): number;
    environmentalEnd(): number;
    environmentalStart(): number;
    equals(arg0: Object | null): boolean;
    green(): number;
    hashCode(): number;
    red(): number;
    renderEnd(): number;
    renderStart(): number;
    toString(): string;
}