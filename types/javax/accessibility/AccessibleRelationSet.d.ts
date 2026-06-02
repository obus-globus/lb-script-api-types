import type { AccessibleRelation } from '../../javax/accessibility/AccessibleRelation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AccessibleRelationSet extends Object {
    constructor()
    constructor(arg0: AccessibleRelation[])
    // private relations: AccessibleRelation[];
    add(arg0: AccessibleRelation): boolean;
    addAll(arg0: AccessibleRelation[]): void;
    clear(): void;
    contains(arg0: string): boolean;
    get(arg0: string): AccessibleRelation;
    remove(arg0: AccessibleRelation): boolean;
    size(): number;
    toArray(): AccessibleRelation[];
    toString(): string;
}