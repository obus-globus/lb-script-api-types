import type { Class } from '../../../java/lang/Class.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ModCheck$Confidence } from '../../../net/minecraft/util/ModCheck$Confidence.d.ts'
export class ModCheck extends Record {
    static identify(paramexpectedBrand: string, paramactualBrand: () => string, paramcomponent: string, paramcanaryClass: Class<Object>): ModCheck;
    constructor(confidence: ModCheck$Confidence, description: string)
    // private confidence: ModCheck$Confidence;
    // private description: string;
    confidence(): ModCheck$Confidence;
    description(): string;
    equals(o: Object | null): boolean;
    fullDescription(): string;
    hashCode(): number;
    merge(other: ModCheck): ModCheck;
    shouldReportAsModified(): boolean;
    toString(): string;
}