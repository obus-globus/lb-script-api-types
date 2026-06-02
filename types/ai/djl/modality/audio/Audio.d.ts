import type { Object } from '../../../../java/lang/Object.d.ts'
export class Audio extends Object {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number, arg2: number)
    readonly channels: number;
    readonly data: number[];
    readonly sampleRate: number;
    getChannels(): number;
    getData(): number[];
    getSampleRate(): number;
}