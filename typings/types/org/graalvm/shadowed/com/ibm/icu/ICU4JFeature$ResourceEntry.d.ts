import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ICU4JFeature$ResourceEntry extends Record {
    constructor(className: string, resourcePath: string)
    constructor(classNames: string[], resourcePath: string)
    // private classNames: string[];
    // private resourcePaths: string[];
    classNames(): string[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    resourcePaths(): string[];
    toString(): string;
}