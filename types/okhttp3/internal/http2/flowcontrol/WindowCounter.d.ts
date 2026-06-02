import type { Object } from '../../../../java/lang/Object.d.ts'
export class WindowCounter extends Object {
    constructor(streamId: number)
    readonly acknowledged: number;
    readonly streamId: number;
    readonly total: number;
    readonly unacknowledged: number;
    toString(): string;
    update(total: number, acknowledged: number): void;
}