import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DodgePlannerConfig extends Object {
    constructor(allowRotations: boolean)
    readonly allowRotations: boolean;
    component1(): boolean;
    copy(allowRotations: boolean): DodgePlannerConfig;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}