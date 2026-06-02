import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ViewportData extends Record {
    static defaultValue(): ViewportData;
    // private scale: number;
    // private viewportX: number;
    // private viewportY: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    scale(): number;
    toString(): string;
    viewportX(): number;
    viewportY(): number;
}