import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerPositionStorage$PlayerPosition extends Record {
    constructor(x: number, y: number, z: number, yaw: number, pitch: number, onGround: boolean)
    // private onGround: boolean;
    // private pitch: number;
    // private x: number;
    // private y: number;
    // private yaw: number;
    // private z: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onGround(): boolean;
    pitch(): number;
    toString(): string;
    x(): number;
    y(): number;
    yaw(): number;
    z(): number;
}