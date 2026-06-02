import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Introspection$SpecializationInfo extends Object {
    constructor(methodName: string, state: number, cachedData: Object[][])
    readonly cachedData: Object[][];
    readonly methodName: string;
    // private state: number;
    getCachedData(instanceIndex: number): Object[];
    getInstances(): number;
    getMethodName(): string;
    isActive(): boolean;
    isExcluded(): boolean;
    toString(): string;
}