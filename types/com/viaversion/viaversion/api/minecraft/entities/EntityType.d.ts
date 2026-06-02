import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface EntityType extends Object{
    getId(): number;
    getParent(): EntityType;
    identifier(): string;
    is(arg0: EntityType): boolean;
    isAbstractType(): boolean;
    isOrHasParent(arg0: EntityType): boolean;
    name(): string;
}