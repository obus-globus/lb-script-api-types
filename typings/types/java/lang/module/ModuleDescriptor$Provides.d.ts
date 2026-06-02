import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor$Provides extends Object implements Comparable<ModuleDescriptor$Provides> {
    private constructor(arg0: string, arg1: string[])
    private constructor(arg0: string, arg1: string[], arg2: boolean)
    // private providers: string[];
    // private service: string;
    compareTo(arg0: ModuleDescriptor$Provides): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    providers(): string[];
    service(): string;
    toString(): string;
}