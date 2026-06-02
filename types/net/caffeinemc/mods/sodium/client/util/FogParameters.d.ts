import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FogParameters extends Record {
    static NONE: FogParameters;
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