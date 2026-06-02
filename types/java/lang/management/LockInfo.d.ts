import type { CompositeData } from '../../../javax/management/openmbean/CompositeData.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LockInfo extends Object {
    static from(paramarg0: CompositeData): LockInfo;
    constructor(arg0: Object)
    constructor(arg0: string, arg1: number)
    readonly className: string;
    readonly identityHashCode: number;
    getClassName(): string;
    getIdentityHashCode(): number;
    toString(): string;
}