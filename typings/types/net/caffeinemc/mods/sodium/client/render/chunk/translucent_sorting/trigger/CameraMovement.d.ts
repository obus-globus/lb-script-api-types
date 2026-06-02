import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Vector3dc } from '../../../../../../../../../org/joml/Vector3dc.d.ts'
export class CameraMovement extends Record {
    constructor(start: Vector3dc, end: Vector3dc)
    // private end: Vector3dc;
    // private start: Vector3dc;
    end(): Vector3dc;
    equals(arg0: Object | null): boolean;
    hasChanged(): boolean;
    hashCode(): number;
    start(): Vector3dc;
    toString(): string;
}