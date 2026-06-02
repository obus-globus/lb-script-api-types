import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProblemReporter$PathElement } from '../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class Entity$EntityPathElement extends Record implements ProblemReporter$PathElement {
    private constructor(entity: Entity)
    // private entity: Entity;
    entity(): Entity;
    equals(o: Object | null): boolean;
    get(): string;
    hashCode(): number;
    toString(): string;
}