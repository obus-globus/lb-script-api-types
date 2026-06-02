import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ClassSignature$TypeVar extends Object implements Comparable<ClassSignature$TypeVar> {
    constructor(arg0: string)
    // private currentName: string;
    // private originalName: string;
    compareTo(arg0: ClassSignature$TypeVar): number;
    equals(arg0: Object | null): boolean;
    getOriginalName(): string;
    hashCode(): number;
    matches(arg0: string): boolean;
    rename(arg0: string): void;
    toString(): string;
}