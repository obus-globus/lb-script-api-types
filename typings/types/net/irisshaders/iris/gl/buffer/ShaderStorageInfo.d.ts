import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShaderStorageInfo extends Record {
    constructor(size: number, relative: boolean, scaleX: number, scaleY: number, name: string)
    // private name: string;
    // private relative: boolean;
    // private scaleX: number;
    // private scaleY: number;
    // private size: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    relative(): boolean;
    scaleX(): number;
    scaleY(): number;
    size(): number;
    toString(): string;
}