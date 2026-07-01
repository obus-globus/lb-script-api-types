import type { CompositeData } from '../../../javax/management/openmbean/CompositeData.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MemoryUsage extends Object {
    static from(paramarg0: CompositeData): MemoryUsage;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly committed: number;
    readonly init: number;
    readonly max: number;
    readonly used: number;
    getCommitted(): number;
    getInit(): number;
    getMax(): number;
    getUsed(): number;
    toString(): string;
}